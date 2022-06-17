const albums = require("../models/album.model");

function getNewAlbumForm(request, response) {
  try {
    response.status(200).render(`formulario.nuevo.album.pug`);
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario nuevo álbum`,
    });
  }
}

function add(request, response) {
  try {
    const newAlbumRequest = request.body;
    const {
      "album-artist": artist,
      "album-name": name,
      "album-price": price,
      "album-img": img,
      "album-release-year": release_year,
    } = newAlbumRequest;

    const newAlbum = {
      name: name,
      price: price,
      img: img,
      artist: artist,
      release_year: release_year,
    };
    albums.push(newAlbum);
    response.status(201).render(`formulario.nuevo.album.pug`);
  } catch (error) {
    response.status(404).json({
      message: `Hubo un error al crear al álbum`,
    });
  }
}

module.exports = {
  add,
  getNewAlbumForm,
};
