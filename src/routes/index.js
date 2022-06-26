const express = require('express');
const users = require("./users.routes");
const login = require("./login.routes");
const apartaments = require ("./apartament.routes");
const router = express.Router();

router.use('/users', users);
router.use('/login', login);
router.use('/apartaments', apartaments);

module.exports = router;