const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { PORT } = require('./config/server');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});