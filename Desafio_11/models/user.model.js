const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

function add(user) {
  try {
    const newUser = new User(user);
    newUser.save();
    return newUser;
  } catch (error) {
    throw "Hubo un error al registrar el usuario";
  }
}

function check(email) {
  try {
    const isPresent = User.findOne({ email }).count();
    return isPresent;
  } catch (error) {
    throw `Hubo un error al buscar al chequear el usuario`;
  }
}

module.exports = {
  add,
  check,
};
