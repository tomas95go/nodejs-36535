const express = require("express");
const chatsController = require("../controllers/chats.controller");
const chatRouter = express.Router();

chatRouter.get("/", chatsController.getChatView);

module.exports = chatRouter;
