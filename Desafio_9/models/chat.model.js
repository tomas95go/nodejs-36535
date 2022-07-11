const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  author: {
    id: String,
    nombre: String,
    apellido: String,
    edad: String,
    alias: String,
    avatar: String,
  },
  text: String,
});

const Chat = mongoose.model("Chat", chatSchema);

async function getAllChat() {}

function addMessage() {
  try {
    const newMessage = {
      author: {
        id: 1,
        nombre: "Tom",
        apellido: "asd",
        edad: "24",
        alias: "asd",
        avatar: "xD",
      },
      text: "hola!!!!!",
    };
    const product = new Chat(newMessage);
    product.save();
    return product;
  } catch (error) {
    throw "Hubo un error al obtener los productos";
  }
}

module.exports = {
  getAllChat,
  addMessage,
};
