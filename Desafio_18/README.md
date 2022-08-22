# Instrucciones

Por favor, leer antes de ejecutar.

## Como ejecutar el programa en su computadora:

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_18.
3. Ejecutar npm install.
4. Ejecutar npm install o npm run dev.
5. Abrir la URL http://localhost:8080/graphql/albums en su navegador, ejecutar las queries/mutations listadas abajo.

## Queries y Mutations

```
{
  getAll {
    id,
    artist,
    album,
    active
  }
}

mutation {
  createOne(input: {artist: "Eminem", album: "Encore", active: true}) {
    id
  }
}

mutation {
  updateOne(id: 2, input: {artist: "Eminem", album: "MyUpdatedAlbum", active: true}) {
    id
  }
}

mutation {
  deleteOne(id: 2) {
    id
  }
}


```
