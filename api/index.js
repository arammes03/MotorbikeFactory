// Import express
const express = require('express');

// Importamos DOTENV para leer variables de entorno
require('dotenv').config();

// Creación del servidor
const app = express();

// Permitimos lectura y escritura JSON
app.use(express.json());

// Puerto del servidor
PORT = process.env.PORT;

// Ruta inicial
app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
