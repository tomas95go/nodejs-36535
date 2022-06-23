function getHomeView(request, response) {
  response.render("partials/pages/home");
}

module.exports = {
  getHomeView,
};
