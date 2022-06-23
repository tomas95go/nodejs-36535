const albums = require("../models/albums.model");

function getAlbumsView(request, response) {
  response.render("partials/pages/albums");
}

function add(album, io) {
  albums.push(album);
  io.sockets.emit("new album", album);
}

function list(socket) {
  socket.emit("get all albums", albums);
}

module.exports = {
  getAlbumsView,
  add,
  list,
};
