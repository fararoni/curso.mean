const { Schema } = require("mongoose")

const personaSchema = new Schema (
{
    "id": {type: String, required: true},
    "Area": {type: String, required: false},
    "Cargo": {type: String, required: false},
    "Extension": {type: Number, required: false},
    "Titulo": {type: Number, required: false},
    "NombreCompleto":{type: String, required: true},
    "Correo": {type: String, required: false},
    "Edificio":{type: String, required: false},
    "Piso": {type: String, required: false},
  })

  module.exports = { personaSchema}