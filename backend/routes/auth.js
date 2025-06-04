const express = require('express');
const { login, join } = require('../controller/auth');
const { isjwt } = require('../middlewares/isjwt');

const router = express.Router();

router.post( '/login', login, isjwt );

router.post('/join', join);

module.exports = router;