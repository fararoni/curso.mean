const mongoose = require('mongoose')

const { personaSchema} = require('../schemas/persona.schema')
// crear el modelo de persona

const PersonaModel = mongoose.model('PersonaSchema', personaSchema)

module.expors = { PersonaModel }