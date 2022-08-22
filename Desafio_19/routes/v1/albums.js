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
  fastify.post("/albums", async (request, reply) => {
    const newAlbum = request.body;
    const newId = albums.length + 1;
    newAlbum.id = newId;
    albums.push(newAlbum);
    reply
      .code(200)
      .send({ message: "Nuevo de álbum agregado con éxito", albums });
  });
  fastify.put("/albums/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const newData = request.body;
    const { artist, album } = newData;
    const updatedAlbum = albums.find((album) => album.id === id);
    updatedAlbum.artist = artist;
    updatedAlbum.album = album;
    reply
      .code(200)
      .send({ message: "Álbum actualizado con éxito", updatedAlbum });
  });
  fastify.delete("/albums/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const deletedAlbum = albums.find((album) => album.id === id);
    deletedAlbum.active = false;
    reply.code(200).send({ message: "Álbum borrado con éxito", deletedAlbum });
  });
}

module.exports = routes;
