const mongoose = require('mongoose')

const { PersonaSchema} = require('./schemas/persona.schema')
const PersonaModel = mongoose.model('personas_collection', PersonaSchema)

module.exports = { PersonaModel }