const express = require("express");
const multer = require("multer");
const uploadConfig = require('../config/multer');
const apartamentsControllers = require('../controllers/apartamentsControllers');
const upload = multer (uploadConfig)
const authenticatedUser = require('../middlewares/authenticatedUser');

const router = express.Router();

router.get('/', apartamentsControllers.findAll);
router.post('/', authenticatedUser,apartamentsControllers.create);
router.get('/:id',  apartamentsControllers.findById);
router.put('/:id',authenticatedUser,  apartamentsControllers.edit);
router.delete('/:id',authenticatedUser, apartamentsControllers.remove);
router.put('/:id/image', upload.single('image'),authenticatedUser, apartamentsControllers.createImage);

module.exports = router;