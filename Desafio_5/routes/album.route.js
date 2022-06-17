const express = require("express");
const albumController = require("../controllers/album.controller");
const albumRouter = express.Router();

albumRouter.get(`/`, albumController.getNewAlbumForm);

albumRouter.post(`/`, albumController.add);

module.exports = albumRouter;
