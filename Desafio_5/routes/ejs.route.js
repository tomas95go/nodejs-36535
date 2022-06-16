const express = require("express");
const ejsRouter = express.Router();

ejsRouter.get("/", (request, response) => {
  response.send(`Hola desde ejsRouter`);
});

module.exports = ejsRouter;
