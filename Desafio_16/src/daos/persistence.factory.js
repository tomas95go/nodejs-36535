class PersistenceFactory {
  static async getPersistence() {
    try {
      if (process.env.PERSISTANCE === "MONGO") {
        return;
      }

      if (process.env.PERSISTANCE === "MEMORY") {
        const ProductsDaoMemory = require(`${__dirname}/products.dao.memory`);
        const productsDaoMemoryInstance = new ProductsDaoMemory();
        return productsDaoMemoryInstance;
      }
    } catch (error) {
      throw `Hubo un error al determinar el tipo de persistencia: ${error}`;
    }
  }
}

module.exports = PersistenceFactory;
