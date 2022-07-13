const express = require("express");
const loginRouter = express.Router();

loginRouter.post("/", (request, response) => {
  const user = request.body;
  response.status(200).json({
    message: "Login successful",
    greeting: `Bienvenido: ${user.name}`,
  });
});

module.exports = loginRouter;
