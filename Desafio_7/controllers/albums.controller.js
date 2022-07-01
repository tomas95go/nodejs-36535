const path = require("path");
const { getAllDB } = require(path.join(__dirname, "..", "models/albums.model"));

function add(album, io) {
  io.emit("new-album-ui", album);
}

async function list(socket) {
  const albums = await getAllDB();
  socket.emit("albums", albums);
}

module.exports = {
  add,
  list,
};
