require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://storied-frangollo-948f09.netlify.app'
    ]
}));

app.use(express.json());

// Health routes
app.get('/', (req, res) => {
    res.json({ message: "API is running" });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});

// Feature routes
app.use(authRoutes);
app.use(dashboardRoutes);

module.exports = app;