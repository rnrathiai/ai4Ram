const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const dashboardController = require('../controllers/dashboardController');

router.get('/dashboard', authenticateToken, dashboardController.dashboard);

module.exports = router;