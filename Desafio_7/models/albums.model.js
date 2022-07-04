const path = require("path");
const mariaDB = require(path.join(__dirname, "..", "db/maria.db"));

async function getAllDB() {
  const albums = await mariaDB.select().table("albums");
  return albums;
}

async function addDB(album) {
  await mariaDB("albums").insert(album);
}

module.exports = {
  getAllDB,
  addDB,
};
