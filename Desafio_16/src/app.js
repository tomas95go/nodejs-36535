const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hey!");
});

module.exports = app;
