class ProductsDaoMemory {
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Ventana",
        description: "Para ver afuera",
        price: 200,
      },
      {
        id: 2,
        name: "Puerta",
        description: "Para ir al otro lado",
        price: 400,
      },
    ];
  }
  async getAll() {
    return this.products;
  }
  async save(product) {
    this.products.push(product);
    return product;
  }
  async getById(id) {
    const product = this.products.find((product) => product.id === id);
    return product;
  }
  async update(id, newProductData) {
    const updatedProduct = await this.getById(id);
    updatedProduct.name = newProductData.name;
    updatedProduct.description = newProductData.description;
    updatedProduct.price = newProductData.price;
    return updatedProduct;
  }
  async softDelete(id) {
    const deletedProduct = await this.getById(id);
    deletedProduct.active = false;
    return deletedProduct;
  }
}

module.exports = ProductsDaoMemory;
