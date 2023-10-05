var express = require('express');
var router = express.Router();
const dirController = require('../controllers/directorio-controller')
// 2- Agregar los routers
router.get('/', dirController.list );
router.get('/view/:id', dirController.view );
router.get('/edit/:id', dirController.edit );
router.post('/save/:id', dirController.save );
// router.get('/add', dirController.add );

// router.get('/delete/:id', dirController.delete );

module.exports = router;
