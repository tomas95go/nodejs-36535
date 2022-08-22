const path = require("path");
const albums = require(path.join(__dirname, "..", "..", "data/albums"));

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 */
async function routes(fastify) {
  fastify.get("/albums", async (request, reply) => {
    reply
      .code(200)
      .send({ message: "Lista de álbumes recuperada con éxito", albums });
  });
}

module.exports = routes;
