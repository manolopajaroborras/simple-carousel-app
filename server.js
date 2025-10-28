//Este archivo simplemente configura Express para servir los archivos estáticos
//  desde la carpeta public.
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
  console.log('Presiona Ctrl+C para detenerlo.');
});
