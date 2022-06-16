# Instrucciones

Por favor, leer antes de ejecutar.

## Como ejecutar el programa en su computadora:

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_4.
3. Ejecutar "npm install" para instalar las dependecias.
4. Ejecutar "npm start".

## Listado de los diferentes endpoints

- REST:

| HTTP   | ENDPOINT                              | RESULTADO              |
| ------ | ------------------------------------- | ---------------------- |
| GET    | http://localhost:8080/api/productos   | Listado de álbum       |
| GET    | http://localhost:8080/api/productos/1 | Álbum individual       |
| POST   | http://localhost:8080/api/productos/  | Agrega álbum           |
| PUT    | http://localhost:8080/api/productos/1 | Actualiza álbum        |
| DELETE | http://localhost:8080/api/productos/8 | Borrado (lógico) álbum |

- HTML:

| HTTP | ENDPOINT                                  | RESULTADO              |
| ---- | ----------------------------------------- | ---------------------- |
| GET  | http://localhost:8080/productos/form.html | Formulario nuevo álbum |

## Ejemplo de datos para agregar

    {
        "name": "Get Rich Or Die Tryin'",
        "price": 29.99,
        "img": "https://i.discogs.com/AMVipM-vD1NU3NhvRZkzNkzCup5PakFAJJqVUj3UDXU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1ODg4/Mi0xNDI1NzA3OTQw/LTg4MDUuanBlZw.jpeg",
        "artist": "50 Cent",
        "release_year": 2003,
    },
    {
        "name": "AmeriKKKa's Most Wanted",
        "price": 29.99,
        "img": "https://i.discogs.com/ukKYqxz-LPzo4RXmvyOeRu4LtMzqtxzpCmwJ8chV1SQ/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTE1/Ny0xMTk1MzgyNDYz/LmpwZWc.jpeg",
        "artist": "Ice Cube",
        "release_year": 1900
    }
