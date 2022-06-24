const fs = require("fs");
const chat = fs.readFileSync("data/chat.json");
const parsedChat = JSON.parse(chat);

function getChatView(request, response) {
  response.render("partials/pages/chat");
}

function getChat(socket) {
  socket.emit("chat", parsedChat);
}

function add(message, io) {
  io.emit("chat message", message);
}

module.exports = {
  getChat,
  getChatView,
  add,
};
