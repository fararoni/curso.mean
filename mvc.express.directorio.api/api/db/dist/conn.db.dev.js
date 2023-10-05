"use strict";

var mongoose = require('mongoose'); //.-  Despues de tener el modelo


var _require = require('../models/persona'),
    PersonaModel = _require.PersonaModel; // Test conexión URI a MongoDB


var uri = 'mongodb://127.0.0.1:27017/directorio';
var conn = mongoose.connect(uri).then(function (result) {
  console.log('Connectado a ' + uri);
})["catch"](function (error) {
  console.log("Error en conexion ");
  console.error(error);
}); //.-  Despues de tener el modelo
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
});
module.exports = PersonaModel;