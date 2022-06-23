const albumsController = require(`../controllers/albums.controller`);

function handleNewAlbum(album, io) {
  albumsController.add(album, io);
}

module.exports = handleNewAlbum;
