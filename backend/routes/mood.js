const express = require('express');
const { createMoodLog, getMoodLogs } = require('../controllers/mood.controller.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = express.Router();

// Create MoodLog
router.post('/', authMiddleware, createMoodLog);

// Get MoodLogs for User
router.get('/', authMiddleware, getMoodLogs);

module.exports = router;
