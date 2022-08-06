# Instrucciones

Por favor, leer antes de ejecutar.

## Como ejecutar el programa en su computadora:

1. Clonar el repositorio.
2. Dirigirse a la carpeta Desafio_17.
3. Ejecutar "npm install" para instalar las dependecias.
4. Configurar el .env como en el ejemplo.
5. Ejecutar "npm run dev" o "npm start".
6. Con Postman u otro software similar, probar los siguientes end points:
   - 6.1. Obtener todos los productos: GET => http://localhost:8080/api/products
   - 6.2. Agregar un nuevo producto: POST => http://localhost:8080/api/products
     - 6.2.1. Configurar el POST con el JSON de ejemplo

## Ejemplo de .env

```
PERSISTANCE="MEMORY"
```

## Ejemplo de post

```
{
        "id": 3,
        "name": "Piso",
        "description": "Para pararse encima",
        "price": 50
}
```
