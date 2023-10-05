"use strict";

var mongoose = require('mongoose');

var _require = require('../schemas/persona.schema'),
    personaSchema = _require.personaSchema; // crear el modelo de persona


var PersonaModel = mongoose.model('PersonaSchema', personaSchema);
module.expors = {
  PersonaModel: PersonaModel
};