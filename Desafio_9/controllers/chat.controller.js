const chatModel = require("../models/chat.model");

async function getChat(socket) {
  const chat = []; //await getAllChatDB();
  socket.emit("chat", chat);
}

function add(message, io) {
  io.emit("chat-message-ui", message);
  chatModel.addMessage(message);
}

module.exports = {
  getChat,
  add,
};
