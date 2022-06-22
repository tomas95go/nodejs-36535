const express = require("express");
const { create } = require("express-handlebars");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");
const albumsRouter = require(`${__dirname}/routes/albums.route`);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const hbs = create({
  partialsDir: ["views/partials/"],
});
const PORT = 8080;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use("/productos", albumsRouter);

app.get("/", (req, res) => {
  res.render("partials/pages/home");
});

app.get("/chat", (req, res) => {
  res.render("partials/pages/chat");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (message) => {
    const chatMessage = {
      email: message.email,
      message: message.text,
      date: new Date().toLocaleString("es-AR"),
    };
    io.emit("chat message", chatMessage);

    const chat = fs.readFileSync(`${__dirname}/data/chat.json`, {
      encoding: "utf8",
    });
    const parsedChat = JSON.parse(chat);
    parsedChat.push(chatMessage);

    const formattedChat = JSON.stringify(parsedChat);
    fs.writeFile(`${__dirname}/data/chat.json`, formattedChat, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Chat guardado");
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
