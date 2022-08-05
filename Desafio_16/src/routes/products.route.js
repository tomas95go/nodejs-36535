const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/", (request, response) => {
  response.status(200).json({
    message: "Get en productsRouter",
  });
});

module.exports = productsRouter;
