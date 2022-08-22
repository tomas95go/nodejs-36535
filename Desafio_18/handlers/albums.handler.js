const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const albums = require(path.join(__dirname, "..", "data/albums.js"));

const albumHandler = express.Router();

const schema = buildSchema(`
type Query {
  getAll: [Album]
},
type Mutation {
  createOne(input: AlbumInput): [Album],
  updateOne(id: Int,input: AlbumInput): Album,
  deleteOne(id: Int): Album
},
type Album {
  id: Int,
  artist: String,
  album: String,
  active: Boolean
}
input AlbumInput {
  artist: String,
  album: String,
  active: Boolean
}
`);

const root = {
  getAll: () => {
    return albums;
  },
  createOne: (input) => {
    const { input: newAlbum } = input;
    const newId = albums.length + 1;
    newAlbum.id = newId;
    albums.push(newAlbum);
    return albums;
  },
  updateOne: ({ id, input }) => {
    const updatedAlbum = albums.find((album) => album.id === id);
    const { artist, album, active } = input;
    updatedAlbum.artist = artist;
    updatedAlbum.album = album;
    updatedAlbum.active = active;
    return updatedAlbum;
  },
  deleteOne: ({ id }) => {
    const softDeletedAlbum = albums.find((album) => album.id === id);
    softDeletedAlbum.active = false;
    return softDeletedAlbum;
  },
};

albumHandler.use(
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = albumHandler;
