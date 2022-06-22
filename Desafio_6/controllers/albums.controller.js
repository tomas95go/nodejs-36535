const albums = require("../models/albums.model");

function getAll(request, response) {
  response.render("partials/pages/albums");
}

module.exports = {
  getAll,
};
