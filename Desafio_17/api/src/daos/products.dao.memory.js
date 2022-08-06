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
}

module.exports = ProductsDaoMemory;
