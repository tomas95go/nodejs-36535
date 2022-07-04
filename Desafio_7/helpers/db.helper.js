async function checkTable(db, tableName) {
  const tableExists = await db.schema.hasTable(tableName);
  return tableExists;
}

async function createAlbumsTable(db, tableName) {
  await db.schema.createTable(tableName, function (table) {
    table.increments();
    table.string("name", 255);
    table.double("price");
    table.string("img", 255);
    table.string("artist", 255);
    table.string("release_year");
  });
}

async function createMessagesTable(db, tableName) {
  await db.schema.createTable(tableName, function (table) {
    table.increments();
    table.string("message", 255);
    table.string("date", 255);
    table.string("email", 255);
  });
}

module.exports = {
  checkTable,
  createAlbumsTable,
  createMessagesTable,
};
