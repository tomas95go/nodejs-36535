const chatsController = require("../controllers/chats.controller");
const filesController = require("../controllers/files.controller");

function handleChatMessage(message, io) {
  const chatMessage = {
    email: message.email,
    message: message.text,
    date: new Date().toLocaleString("es-AR"),
  };
  chatsController.add(chatMessage, io);
  filesController.save(chatMessage);
}

module.exports = handleChatMessage;
