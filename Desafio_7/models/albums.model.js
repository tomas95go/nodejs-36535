const path = require("path");
const mariaDB = require(path.join(__dirname, "..", "db/maria.db"));

async function getAllDB() {
  const albums = await mariaDB.select().table("albums");
  return albums;
}

module.exports = {
  getAllDB,
};
