const path = require("path");
const sqliteDB = require(path.join(__dirname, "..", "db/sqlite.db"));

async function getAllChatDB() {
  const chat = await sqliteDB.select().table("messages");
  return chat;
}

module.exports = {
  getAllChatDB,
};
