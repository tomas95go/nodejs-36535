const express = require("express");
const pugRouter = express.Router();

pugRouter.get("/", (request, response) => {
  response.send(`Hola desde pugRouter`);
});

module.exports = pugRouter;
