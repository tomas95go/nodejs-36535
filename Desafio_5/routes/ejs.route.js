const express = require("express");
const ejsRouter = express.Router();
const albumController = require("../controllers/album.controller");

ejsRouter.get("/", albumController.getNewAlbumFormEJS);
ejsRouter.get("/productos", albumController.getAllEJS);
ejsRouter.post("/productos", albumController.add);

module.exports = ejsRouter;
