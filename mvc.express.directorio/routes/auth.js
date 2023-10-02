var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth')
// 3- Agregar los routers
router.get('/login', authController.login );
router.get('/logout', authController.logout );
router.get('/register', authController.register );
module.exports = router;