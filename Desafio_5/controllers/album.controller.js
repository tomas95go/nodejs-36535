const albums = require("../models/album.model");

function getAll(request, response) {
  const albumsReady = albums.length ? albums : false;
  response.render(`home.handlebars`, {
    albumsReady,
  });
}

function getAllPug(request, response) {
  response.render(`index.pug`, {
    title: `Productos`,
    esLista: true,
    albums: albums,
  });
}

function getAllEJS(request, response) {
  response.render(`index.ejs`, {
    title: `Productos`,
    esLista: true,
    esFormulario: false,
    albums: albums,
  });
}
function getNewAlbumFormPug(request, response) {
  try {
    response.status(200).render(`index.pug`, {
      title: "Productos",
      esFormulario: true,
    });
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario nuevo álbum`,
    });
  }
}

function getNewAlbumFormHandleBars(request, response) {
  try {
    response.status(200).render(`formulario.nuevo.album.handlebars`);
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario nuevo álbum`,
    });
  }
}

function getNewAlbumFormEJS(request, response) {
  try {
    response.status(200).render(`index.ejs`, {
      title: "Productos",
      esFormulario: true,
      esLista: false,
    });
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario nuevo álbum`,
    });
  }
}

function determineRedirect(engine, response) {
  if (engine === "ejs") {
    response.status(201).redirect(`/ejs/`);
  } else if (engine === "handlebars") {
    response.status(201).redirect(`/handlebars/`);
  } else {
    response.status(201).redirect(`/pug/`);
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
      "template-engine": engine,
    } = newAlbumRequest;

    const newAlbum = {
      name: name,
      price: price,
      img: img,
      artist: artist,
      release_year: release_year,
    };
    albums.push(newAlbum);
    determineRedirect(engine, response);
  } catch (error) {
    response.status(404).json({
      message: `Hubo un error al crear al álbum`,
    });
  }
}

module.exports = {
  getAll,
  getAllPug,
  getAllEJS,
  add,
  getNewAlbumFormPug,
  getNewAlbumFormHandleBars,
  getNewAlbumFormEJS,
};
