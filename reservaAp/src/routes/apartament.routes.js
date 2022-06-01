const express = require("express");
const apartamentControllers = require('../controllers/apartamentControllers');

const authenticatedUser = require('../middlewares/authenticatedUser');
const router = express.Router();



router.get('/', authenticatedUser, apartamentControllers.findAll);
router.post('/', apartamentControllers.create);
router.get('/:id', apartamentControllers.findById);
router.put('/:id', apartamentControllers.edit);
router.delete('/:id', apartamentControllers.remove);


module.exports = router;