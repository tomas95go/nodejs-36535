const path = require("path");
const sqliteDB = require(path.join(__dirname, "..", "db/sqlite.db"));

async function getAllChatDB() {
  const chat = await sqliteDB.select().table("messages");
  return chat;
}

async function addMessageDB(newMessage) {
  const { message, date, email } = newMessage;
  await sqliteDB
    .insert({
      message,
      date,
      email,
    })
    .into("messages");
}

module.exports = {
  getAllChatDB,
  addMessageDB,
};
