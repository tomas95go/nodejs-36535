const albumsController = require(`../controllers/albums.controller`);

function handleNewAlbum(album, io) {
  albumsController.add(album, io);
}

function handleAllAlbums(socket) {
  albumsController.list(socket);
}

module.exports = { handleNewAlbum, handleAllAlbums };
