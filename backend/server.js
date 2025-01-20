require('dotenv').config();

const express = require('express');
const connectDB = require('./db/db.js');
const cors = require('cors');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/tasks', require('./routes/tasks.js'));
app.use('/api/mood', require('./routes/mood.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
