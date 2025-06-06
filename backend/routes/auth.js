const express = require('express');
const { login, idcheckr, register } = require('../controllers/auth');
const { isjwt } = require('../utils/isjwt');


const router = express.Router();

router.post( '/login', login, isjwt );

router.post('/idcheck', idcheckr);

router.post('/register', register);
 
module.exports = router;