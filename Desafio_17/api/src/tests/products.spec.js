const path = require("path");
const request = require("supertest");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const app = require(path.join(__dirname, "..", "app"));

describe("Products API", () => {
  it("Should get a list of products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Productos obtenidos con éxito");
    expect(response.body.formattedProducts).to.be.an("array");
  });
  it("Should add a new product", async () => {
    const newProduct = {
      id: 7,
      name: "Piso",
      description: "Para pararse encima",
      price: 50,
    };
    const response = await request(app)
      .post("/api/products")
      .send(newProduct)
      .set("Content-Type", "application/json");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Productos agregado con éxito");
    expect(response.body.formattedProduct).to.be.an("object");
    expect(response.body.formattedProduct.name).to.equal(newProduct.name);
    expect(response.body.formattedProduct.description).to.equal(
      newProduct.description
    );
    expect(response.body.formattedProduct.price).to.equal(newProduct.price);
  });
});
