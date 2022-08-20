const express = require("express");
const albumHandler = express.Router();

albumHandler.get("/", (request, response) => {
  return response.status(200).json({
    message: "Esta todo bien che!",
  });
});

module.exports = albumHandler;
