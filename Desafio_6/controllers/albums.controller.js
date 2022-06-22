const albums = require("../models/albums.model");

function getAll(request, response) {
  response.render("partials/pages/albums");
}

function add(album, io) {
  albums.push(album);
  io.sockets.emit("new album", album);
}

function list(request, response) {
  try {
    response.status(200).json({
      message: "Lista de albums",
      albums,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al listar los albums",
    });
  }
}

module.exports = {
  getAll,
  add,
  list,
};
