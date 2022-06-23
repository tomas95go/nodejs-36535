function add(message, io) {
  io.emit("chat message", message);
}

module.exports = {
  add,
};
