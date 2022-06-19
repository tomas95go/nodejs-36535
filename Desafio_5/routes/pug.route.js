const express = require("express");
const pugRouter = express.Router();
const albumController = require("../controllers/album.controller");

pugRouter.get("/", albumController.getNewAlbumFormPug);

pugRouter.get("/productos", albumController.getAllPug);

pugRouter.post("/productos", albumController.add);

module.exports = pugRouter;
