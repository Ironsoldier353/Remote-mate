const Task = require('../models/Task.model.js');

// Create a Task
const createTask = async (req, res) => {
    const { title, description, status, assignedTo } = req.body;
    try {
        const task = await Task.create({ title, description, status, assignedTo, createdBy: req.user.id });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.user.id }).populate('assignedTo', 'name email');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createTask, getTasks };
