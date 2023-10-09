const { Router } =  require('express');
const router = Router();

const dirController = require('../controllers/directorio.controller')

router.get   ('/directorio'         , dirController.readAllPersonas )
router.get   ('/directorio/:id'     , dirController.readOnePersona )
router.post  ('/directorio'         , dirController.createPersona )
router.put   ('/directorio/:id'     , dirController.updatePersona )
router.delete('/directorio/:id'     , dirController.deletePersona )

console.log  ('directorio.router')
module.exports = router