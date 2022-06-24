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

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const hbs = create({
  partialsDir: ["views/partials/"],
});
const PORT = 8080;

app.use(express.static("public"));

io.on("connection", (socket) => {
  handleAllChat(socket);
  handleAllAlbums(socket);
  handleChatMessage(socket, io);
  handleNewAlbum(socket, io);
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
