const fs = require("fs");

const albums = fs.readFileSync("data/albums.json");
const parsdAlbums = JSON.parse(albums);

module.exports = parsdAlbums;
