var express = require ('express')
var router = express.Router()
const mainController = require('../controllers/main.controller')

// HTTP Verbs: POST, GET, PUT, DELETE

//POST /api/
//-- Se usa el método semántico POST para la acción de CREAR
router.post('/directorio', mainController.create)
//-- GET
router.get('/directorio', mainController.readAll)
//--- GET 
router.get('/directorio/:id', mainController.readOne)
//-- PUT Actualización
router.put('/directorio', mainController.update)
//-- DELETE Borrar un registro
router.delete('/directorio/:id', mainController.delete)
//-- DELETE Borrar todos los registros
router.delete('/directorio', mainController.deleteAll)

module.exports = router





