# Simple AMB/CRUD de tornillos

ABM simple creado en Node js con Express y MongoDB. 

## Dependencias

- Express
- Morgan
- Mongoose
- Nodemon

## Prerequisites

### MongoDB

Descarga:

`https://www.mongodb.com/try/download/community`

Agregar el directorio al PATH en windows:

`C:\Program Files\MongoDB\Server\"version"\bin>`

Levantar el server de mongo en la terminal:
```bash
mongod
```

### MongoDB Tools

Para importar los datos de prueba **tornillos.json**

Descarga:

`https://www.mongodb.com/try/download/database-tools`

Agregar el directorio al PATH en windows:

`C:\Program Files\MongoDB\Tools\"version"\bin>`


Importar los datos de prueba a mongo
```bash
mongoimport --db=abm-tornillos --collection=tornillos --file=tornillos.json
```

## Iniciar server de node

```bash
cd src
node main.js
```
o
```bash
cd src
nodemon main.js
```

Visitar [http://localhost:3000](http://localhost:3000) para el ejemplo.
