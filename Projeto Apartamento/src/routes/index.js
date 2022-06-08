const express = require('express');
const users = require("./users.routes");
const login = require("./login.routes");
const apartament = require ("./apartament.routes");
const router = express.Router();

router.use('/users', users);
router.use('/login', login);
router.use('/apartament', apartament);

module.exports = router;