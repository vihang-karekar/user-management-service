const User = require('../models/User');

// Create a new user
exports.createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

// Get user by ID
exports.getUserById = async (id) => {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    return user;
};