const mongoose = require('mongoose')
//.-  Despues de tener el modelo
const {PersonaModel} = require('../models/persona')

// Test conexión URI a MongoDB
const uri = 'mongodb://127.0.0.1:27017/directorio'
const conn = mongoose.connect(uri)
    .then((result) => {
        console.log('Connectado a ' + uri)
    })
    .catch((error) => {
        console.log("Error en conexion ")
        console.error(error)
    })
//.-  Despues de tener el modelo

//-- Temporal, rear un documento
PersonaModel.create({
        "Area": "PRESIDENCIA DE LA MESA DIRECTIVA",
        "Cargo": "PRESIDENTA (PRI)",
        "Extension": "8270",
        "Titulo": "DIP.",
        "NombreCompleto": "GUERRA CASTILLO MARCELA  ",
        "Correo": "marcela.guerra@diputados.gob.mx",
        "Edificio": "A",
        "Piso": "PISO 2"
    })
module.exports = PersonaModel