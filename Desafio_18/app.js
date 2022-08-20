const path = require("path");
const express = require("express");
const app = express();

const albumHandler = require(path.join(__dirname, "handlers/albums.handler"));

app.use(express.json());
app.use("/api/albums", albumHandler);

module.exports = app;
