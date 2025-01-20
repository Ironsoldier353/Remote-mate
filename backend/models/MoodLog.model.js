const mongoose = require('mongoose');

const moodLogSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mood: { type: String, enum: ['Happy', 'Neutral', 'Stressed'], required: true },
    note: { type: String },
    productivityScore: { type: Number, min: 0, max: 10 },
}, { timestamps: true });

module.exports = mongoose.model('MoodLog', moodLogSchema);
