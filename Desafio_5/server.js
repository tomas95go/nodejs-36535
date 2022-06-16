const express = require("express");
const app = express();
const PORT = 8080;

const ejsRouter = require(`${__dirname}/routes/ejs.route`);
const handlebarsRouter = require(`${__dirname}/routes/handlebars.route`);
const pugRouter = require(`${__dirname}/routes/pug.route`);

app.use(`/ejs`, ejsRouter);
app.use(`/handlebars`, handlebarsRouter);
app.use(`/pug`, pugRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}. Web: http://localhost:${PORT}`);
});
