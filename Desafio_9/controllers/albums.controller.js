const path = require("path");
const { getAllDB, addDB } = require(path.join(
  __dirname,
  "..",
  "models/albums.model"
));

async function add(album, io) {
  io.emit("new-album-ui", album);
  await addDB(album);
}

async function list(socket) {
  const albums = await getAllDB();
  socket.emit("albums", albums);
}

module.exports = {
  add,
  list,
};
