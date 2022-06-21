const express = require("express");
const { create } = require("express-handlebars");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const hbs = create({
  partialsDir: ["views/partials/"],
});
const PORT = 8080;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("partials/pages/home");
});

app.get("/productos", (req, res) => {
  res.render("partials/pages/albums");
});

app.get("/chat", (req, res) => {
  res.render("partials/pages/chat");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
