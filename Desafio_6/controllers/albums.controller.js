const albums = require("../models/albums.model");

function getAll(request, response) {
  response.render("partials/pages/albums");
}

function add(album, io) {
  io.emit("new album", album);
}

module.exports = {
  getAll,
  add,
};
