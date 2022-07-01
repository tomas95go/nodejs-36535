const albums = require("../models/albums.model");

function add(album, io) {
  io.emit("new-album-ui", album);
}

function list(socket) {
  socket.emit("albums", albums);
}

module.exports = {
  add,
  list,
};
