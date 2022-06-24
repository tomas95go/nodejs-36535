const express = require("express");
const { create } = require("express-handlebars");
const http = require("http");
const { Server } = require("socket.io");

const {
  handleChatMessage,
  handleAllChat,
} = require(`${__dirname}/handlers/chat.handler`);
const {
  handleNewAlbum,
  handleAllAlbums,
} = require(`${__dirname}/handlers/albums.handler`);
const albumsRouter = require(`${__dirname}/routes/albums.route`);
const homeRouter = require(`${__dirname}/routes/home.route`);
const chatRouter = require(`${__dirname}/routes/chat.route`);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const hbs = create({
  partialsDir: ["views/partials/"],
});
const PORT = 8080;

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use("/", homeRouter);
app.use("/productos", albumsRouter);
app.use("/chat", chatRouter);

io.on("connection", (socket) => {
  handleAllChat(socket, io);
  handleAllAlbums(socket);
  handleChatMessage(socket, io);
  socket.on("new album", (album) => {
    handleNewAlbum(album, io);
  });
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
