const path = require("path");
const ProductsService = require(path.join(
  __dirname,
  "..",
  "services/products.service"
));
const ProductsDto = require(path.join(__dirname, "..", "dtos/products.dto"));
const productServiceInstance = new ProductsService();

async function getAll(request, response) {
  try {
    const products = await productServiceInstance.getAll();
    const formattedProducts = products.map(
      ({ id, name, description, price }) => {
        const formattedProduct = new ProductsDto(id, name, description, price);
        return formattedProduct;
      }
    );
    return response.status(200).json({
      message: "Productos obtenidos con éxito",
      formattedProducts,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Hubo un error al obtener los productos",
    });
  }
}

async function save(request, response) {}

module.exports = {
  getAll,
  save,
};
