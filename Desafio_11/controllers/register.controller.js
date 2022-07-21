const path = require("path");
const userModel = require(path.join(__dirname, "..", "models/user.model"));

async function add(request, response) {
  try {
    const newUser = request.body;
    const addedUser = await userModel.add(newUser);
    response.status(200).json({
      message: "Nuevo usuario registrado con éxito",
      user: `Probando. Tus datos: ${addedUser}.`,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al registrar el usuario",
    });
  }
}

module.exports = {
  add,
};
