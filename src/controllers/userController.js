const User = require('../models/User');
const userService = require('../services/userService');

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};