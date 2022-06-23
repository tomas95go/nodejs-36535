const express = require("express");
const chatRouter = express.Router();

chatRouter.get("/", (request, response) => {
  response.render("partials/pages/chat");
});

module.exports = chatRouter;
