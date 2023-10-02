const express = require('express');
const app = express();
const puerto = 3000;

// 4. Configurar el motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para la página de inicio
let proyecto = "MEAN Stack"
let nombres = ['Ana','Luis','Pedro', 'Lorena'];

app.get('/', (req, res) => {
    res.render('index', 
        {   titulo: 'Proyecto - Pug',
            proyecto:proyecto,
            nombres: nombres });
});

// Escuchar en el puerto 3000
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});