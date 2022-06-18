const express = require("express");
const handlebarsRouter = express.Router();
const albumController = require("../controllers/album.controller");

handlebarsRouter.get("/", albumController.getNewAlbumFormHandleBars);

handlebarsRouter.get("/productos", albumController.getAll);

handlebarsRouter.post("/productos", albumController.add);

module.exports = handlebarsRouter;
