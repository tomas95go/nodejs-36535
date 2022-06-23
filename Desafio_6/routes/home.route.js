const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (request, response) => {
  res.render("partials/pages/home");
});

module.exports = homeRouter;
