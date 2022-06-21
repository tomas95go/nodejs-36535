# Instrucciones

Por favor, leer antes de ejecutar.

## Como ejecutar el programa en su computadora:

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_5.
3. Ejecutar "npm install" para instalar las dependecias.
4. Ejecutar "npm start dev".

## Listado de los diferentes endpoints

- HTML:
  | HTTP | ENDPOINT | RESULTADO |
  | ---- | -------- | --------- |
  | GET | http://localhost:8080/pug/ | Formulario nuevo álbum pug |
  | GET | http://localhost:8080/handlebars/ | Formulario nuevo álbum handlebars |
  | GET | http://localhost:8080/ejs/ | Formulario nuevo álbum EJS |
  | GET | http://localhost:8080/pug/productos | Lista de álbumes pug |
  | GET | http://localhost:8080/handlebars/productos | Lista de álbumes handlebars |
  | GET | http://localhost:8080/ejs/productos | Lista de álbumes EJS |
  | POST | http://localhost:8080/pug/productos | Agrega nuevo álbum pug |
  | POST | http://localhost:8080/handlebars/productos | Agrega nuevo álbum handlebars |
  | POST | http://localhost:8080/ejs/productos | Agrega nuevo álbum EJS |

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
