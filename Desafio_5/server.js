const express = require("express");
const app = express();
const PORT = 8080;

app.get(`/`, (req, res) => {
  res.send(`Prueba inicial :)`);
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}. Web: http://localhost:${PORT}`);
});
