const fs = require("fs");
const albums = fs.readFileSync("data/albums.json");
const parsdAlbums = JSON.parse(albums);

function test(request, response) {
  response.render("partials/pages/hello");
}

function getAlbumsView(request, response) {
  response.render("partials/pages/albums");
}

function add(album, io) {
  io.emit("new-album-ui", album);
}

function list(socket) {
  socket.emit("albums", parsdAlbums);
}

module.exports = {
  getAlbumsView,
  add,
  list,
  test,
};
