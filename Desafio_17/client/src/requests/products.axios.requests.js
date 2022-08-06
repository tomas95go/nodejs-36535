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

async function httpPutUpdateProduct() {
  try {
    const response = await axios.put(`${API_URL}/1`, {
      name: "Editado",
      description: "Editado",
      price: 10,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    throw `Hubo un error al intentar editar un producto: ${error}`;
  }
}

async function httpDeleteProduct() {
  try {
    const response = await axios.delete(`${API_URL}/1`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw `Hubo un error al intentar borrar un producto: ${error}`;
  }
}

module.exports = {
  httpGetAllProducts,
  httpPostNewProduct,
  httpPutUpdateProduct,
  httpDeleteProduct,
};
