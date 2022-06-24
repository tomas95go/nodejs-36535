const chatController = require("../controllers/chat.controller");
const filesController = require("../controllers/files.controller");

function handleAllChat(socket, io) {
  socket.on("get-chat", () => {
    chatController.getChat(socket);
  });
}

function handleChatMessage(socket, io) {
  socket.on("chat-message", (message) => {
    const chatMessage = {
      email: message.email,
      message: message.text,
      date: new Date().toLocaleString("es-AR"),
    };
    chatController.add(chatMessage, socket, io);
    filesController.save(chatMessage);
  });
}

module.exports = { handleChatMessage, handleAllChat };
