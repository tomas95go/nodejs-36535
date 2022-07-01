const albumsController = require(`../controllers/albums.controller`);
const filesController = require("../controllers/files.controller");

function handleNewAlbum(socket, io) {
  socket.on("new-album", (album) => {
    albumsController.add(album, io);
    filesController.save(album, "data/albums.json");
  });
}

function handleAllAlbums(socket) {
  socket.on("get-albums", async () => {
    await albumsController.list(socket);
  });
}

module.exports = { handleNewAlbum, handleAllAlbums };
