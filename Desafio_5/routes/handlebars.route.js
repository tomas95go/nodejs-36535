const express = require("express");
const handlebarsRouter = express.Router();

handlebarsRouter.get("/", (request, response) => {
  response.render(`home.handlebars`);
});

module.exports = handlebarsRouter;
