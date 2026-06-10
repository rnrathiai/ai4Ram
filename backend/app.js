require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

const PORT = process.env.PORT || 3000;

const generalLimiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max: 100,
    message: {success: false, message: "Too many requests, please try again later."}
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 *1000,
    max: 100,
    message: {success: false, message: "Too many requests, please try again later."}
});



// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://storied-frangollo-948f09.netlify.app'
    ]
}));

app.use(express.json());
app.use(generalLimiter);

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
app.use('/auth', authLimiter, authRoutes);
app.use(dashboardRoutes);

module.exports = app;