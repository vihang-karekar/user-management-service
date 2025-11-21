const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new user
router.post('/', userController.createUser);

// Get user by ID (protected route)
router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;