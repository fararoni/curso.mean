const { Schema } = require("mongoose")

const PersonaSchema = new Schema (
{
    "id"            : {type: String, required: false},
    "area"          : {type: String, required: false},
    "cargo"         : {type: String, required: false},
    "extension"     : {type: Number, required: false},
    "titulo"        : {type: String, required: false},
    "puesto"        : {type: String, required: false},
    "nombrecompleto": {type: String, required: true},
    "correo"        : {type: String, required: false},
    "edificio"      : {type: String, required: false},
    "piso"          : {type: String, required: false},
    "fotografia"    : {type: String, required: false}
})

module.exports = { PersonaSchema }