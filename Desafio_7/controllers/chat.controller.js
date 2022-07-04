const { getAllChatDB } = require("../models/chat.model");

async function getChat(socket) {
  const chat = await getAllChatDB();
  socket.emit("chat", chat);
}

function add(message, socket, io) {
  io.emit("chat-message-ui", message);
}

module.exports = {
  getChat,
  add,
};
