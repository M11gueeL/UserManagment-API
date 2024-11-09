const express = require('express');
const userController = require('../controllers/userController');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', validateRequest, userController.createUser);
router.put('/:id', validateRequest, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;