const express = require("express");
const { create } = require("express-handlebars");

const app = express();
const hbs = create({
  partialsDir: ["views/partials/"],
});
const PORT = 8080;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("partials/pages/home");
});

app.get("/productos", (req, res) => {
  res.render("partials/pages/albums");
});

app.get("/chat", (req, res) => {
  res.render("partials/pages/chat");
});

app.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
