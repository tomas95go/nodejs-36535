const path = require("path");
const mariaDB = require(path.join(__dirname, "..", "db/maria.db"));
const { checkTable, createAlbumsTable } = require(path.join(
  __dirname,
  "..",
  "helpers/db.helper"
));

async function getAllDB() {
  const tableExists = await checkTable(mariaDB, "albums");
  if (tableExists) {
    const albums = await mariaDB.select().table("albums");
    return albums;
  } else {
    createAlbumsTable(mariaDB, "albums");
  }
}

async function addDB(album) {
  const tableExists = await checkTable(mariaDB, "albums");
  if (tableExists) {
    await mariaDB("albums").insert(album);
  } else {
    createAlbumsTable(mariaDB, "albums");
  }
}

module.exports = {
  getAllDB,
  addDB,
};
