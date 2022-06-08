const express = require("express");
const apartamentControllers = require('../controllers/apartamentControllers');

const authenticatedUser = require('../middlewares/authenticatedUser');

const router = express.Router();

router.get('/', apartamentControllers.findAll);
router.post('/', authenticatedUser,apartamentControllers.create);
router.get('/:id',  apartamentControllers.findById);
router.put('/:id',authenticatedUser,  apartamentControllers.edit);
router.delete('/:id',authenticatedUser, apartamentControllers.remove);

module.exports = router;