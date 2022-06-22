const express = require("express");
const albumRouter = express.Router();
const albumsController = require("../controllers/albums.controller");

albumRouter.get("/", albumsController.getAll);

module.exports = albumRouter;
