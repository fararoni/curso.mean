const { PersonaModel } = require('../models/persona.model');

const readAllPersonas = async (req, res) => {
    console.log('-> readAllPersona')
    try {
        const personal = await PersonaModel.find({})
        res.status(200)
        res.json({ result: 'Ok', directorio: personal })
    } catch (error) {
        console.log('Exception en readAllPersonas: ' + error.message)
        res.status(500).send(error.message);
    }
}

const readOnePersona = async (req, res) => {
    try {
        const id = req?.params?.id
        console.log('-> readOnePersona: ' + id)

        const persona = await PersonaModel.findOne({ _id: id })
        if (persona) {
            res.status(200)
            res.json({ result: 'Ok', persona: persona })
        } else {
            res.status(404)
            res.json({
                result: 'Not found',
                mensaje: `Persona no encontrada: ID ${id}`
            })
        }
    } catch (error) {
        console.log('Exception en readOnePersona: ' + error.message)
        res.status(500).send(error.message);
    }
}

const createPersona = async (req, res) => {
    console.log('-> createPersona')
    try {
        const personaModel = new PersonaModel({
            ...req.body
        })

        const persona = await personaModel.save()
        res.status(201)
        res.json({ result: 'Ok', persona: persona })
    } catch (error) {
        console.log('Exception en createPersona: ' + error.message)
        res.status(500)
        res.json({ result: 'Error', mensaje: error.message });
    }
}

const updatePersona = async (req, res) => {
    try {
        const _id = req?.params?.id
        console.log('-> updatePersona: ' + _id)
        const persona = await PersonaModel.findOne({ _id: _id })
        if (persona) {
            const cambiosdelDocumento = {
                ...req.body
            }
            const personaUpdated = await PersonaModel.findByIdAndUpdate(
                _id,
                cambiosdelDocumento,
                { new: true }
            )
            res.status(201)
            res.json({ result: 'Ok', persona: personaUpdated })
        } else {
            res.status(404)
            res.json({
                result: 'Not found',
                mensaje: `Persona no encontrada: ID ${id}`
            })
        }
    } catch (error) {
        console.log('Exception en updatePersona: ' + error.message)
        res.status(500)
        res.json({ result: 'Error', mensaje: error.message });
    }
}

const deletePersona = async (req, res) => {
    try {
        const _id = req?.params?.id
        console.log('-> deletePersona: ' + _id)
        const persona = await PersonaModel.findOne({ _id: _id })
        if (persona) {
            const personaBorrada = await PersonaModel.findByIdAndDelete({ _id: _id })
            console.log( personaBorrada )
            res.status(201)
            res.send({ result: 'Ok', mensaje: `Persona eliminada: ID ${ _id }` })
        } else {
            console.log('-> No se encontró el registro a borrar: ' + _id)
            res.status(400)
            res.json({
                result: 'Not found',
                mensaje: `Persona no encontrada: ID ${_id}`
            })
        }
    } catch (error) {
        console.log('Exception en deletePersona: ' + error.message)
        res.status(500).send(error.message);
    }
}

module.exports = {
    readAllPersonas,
    readOnePersona,
    createPersona,
    updatePersona,
    deletePersona
}