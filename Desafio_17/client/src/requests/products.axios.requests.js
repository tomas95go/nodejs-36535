const axios = require("axios");
const API_URL = "http://localhost:8080/api/products";

async function httpGetAllProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw `Hubo un error al intentar obtener los productos: ${error}`;
  }
}

async function httpPostNewProduct() {
  try {
    const response = await axios.post(`${API_URL}`, {
      id: 3,
      name: "Piso",
      description: "Para pararse encima",
      price: 50,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw `Hubo un error al intentar agregar un nuevo producto: ${error}`;
  }
}

module.exports = {
  httpGetAllProducts,
  httpPostNewProduct,
};
