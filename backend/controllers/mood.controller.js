const MoodLog = require('../models/MoodLog.model.js');

// Create a MoodLog
const createMoodLog = async (req, res) => {
    const { mood, note, productivityScore } = req.body;
    try {
        const moodLog = await MoodLog.create({ user: req.user.id, mood, note, productivityScore });
        res.status(201).json(moodLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all MoodLogs for the logged-in user
const getMoodLogs = async (req, res) => {
    try {
        const moodLogs = await MoodLog.find({ user: req.user.id });
        res.json(moodLogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMoodLog, getMoodLogs };
