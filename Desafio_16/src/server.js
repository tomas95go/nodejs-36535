const http = require("http");
const app = require(`${__dirname}/app.js`);
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`App ready at: http://localhost:${PORT}`);
});
