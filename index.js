// Importamos la biblioteca cargar el modulo-- en este archivo
const express = require('express'); 

//importar modulo path
const path= require('path')

// Creación de la instancia
const app = express();

// Definir el puerto donde escucha todas las solicitudes
const port = 3000;

// Creacion de las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`); 
});
