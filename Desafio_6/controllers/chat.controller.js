function getChatView(request, response) {
  response.render("partials/pages/chat");
}

function add(message, io) {
  io.emit("chat message", message);
}

module.exports = {
  getChatView,
  add,
};
