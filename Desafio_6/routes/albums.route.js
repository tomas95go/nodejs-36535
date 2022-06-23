const express = require("express");
const albumRouter = express.Router();
const albumsController = require("../controllers/albums.controller");

albumRouter.get("/", albumsController.getAlbumsView);
albumRouter.get("/list", albumsController.list);

module.exports = albumRouter;
