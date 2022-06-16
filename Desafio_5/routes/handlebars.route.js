const express = require("express");
const handlebarsRouter = express.Router();

handlebarsRouter.get("/", (request, response) => {
  response.send(`Hola desde handlebarsRouter`);
});

module.exports = handlebarsRouter;
