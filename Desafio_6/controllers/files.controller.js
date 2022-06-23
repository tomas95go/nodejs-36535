const fs = require("fs");

function save(message) {
  const chat = fs.readFileSync("data/chat.json");
  const parsedChat = JSON.parse(chat);
  parsedChat.push(message);
  const formattedChat = JSON.stringify(parsedChat);
  fs.writeFileSync("data/chat.json", formattedChat);
}

module.exports = {
  save,
};
