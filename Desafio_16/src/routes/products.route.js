const path = require("path");
const express = require("express");
const productsRouter = express.Router();

const productsController = require(path.join(
  __dirname,
  "..",
  "controllers/products.controller"
));

productsRouter.get("/", productsController.getAll);

module.exports = productsRouter;
