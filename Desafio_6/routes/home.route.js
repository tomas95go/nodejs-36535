const express = require("express");
const homeController = require("../controllers/home.controller");
const homeRouter = express.Router();

homeRouter.get("/", homeController.getHomeView);

module.exports = homeRouter;
