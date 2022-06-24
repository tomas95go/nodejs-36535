const albums = require("../models/albums.model");

function test(request, response) {
  response.render("partials/pages/hello");
}

function getAlbumsView(request, response) {
  response.render("partials/pages/albums");
}

function add(album, io) {
  albums.push(album);
  io.sockets.emit("new album", album);
}

function list(socket) {
  socket.emit("albums", albums);
}

module.exports = {
  getAlbumsView,
  add,
  list,
  test,
};
