const albumsController = require(`../controllers/albums.controller`);

function handleNewAlbum(socket, io) {
  socket.on("new-album", async (album) => {
    await albumsController.add(album, io);
  });
}

function handleAllAlbums(socket) {
  socket.on("get-albums", async () => {
    await albumsController.list(socket);
  });
}

module.exports = { handleNewAlbum, handleAllAlbums };
