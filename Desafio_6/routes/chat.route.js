const express = require("express");
const chatController = require("../controllers/chat.controller");
const chatRouter = express.Router();

chatRouter.get("/", chatController.getChatView);

module.exports = chatRouter;
