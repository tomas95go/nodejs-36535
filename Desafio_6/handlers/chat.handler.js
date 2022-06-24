const chatController = require("../controllers/chat.controller");
const filesController = require("../controllers/files.controller");

function handleAllChat(socket) {
  chatController.getChat(socket);
}

function handleChatMessage(message, io) {
  const chatMessage = {
    email: message.email,
    message: message.text,
    date: new Date().toLocaleString("es-AR"),
  };
  chatController.add(chatMessage, io);
  filesController.save(chatMessage);
}

module.exports = { handleChatMessage, handleAllChat };
