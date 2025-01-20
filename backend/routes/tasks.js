const express = require('express');
const { createTask, getTasks } = require('../controllers/task.controller.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = express.Router();

// Create Task
router.post('/', authMiddleware, createTask);

// Get All Tasks
router.get('/', authMiddleware, getTasks);

module.exports = router;
