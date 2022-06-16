const express = require("express");
const pugRouter = express.Router();

pugRouter.get("/", (request, response) => {
  response.render(`index.pug`);
});

module.exports = pugRouter;
