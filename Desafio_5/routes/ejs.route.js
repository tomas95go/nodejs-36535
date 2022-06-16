const express = require("express");
const ejsRouter = express.Router();

ejsRouter.get("/", (request, response) => {
  response.render(`index.ejs`);
});

module.exports = ejsRouter;
