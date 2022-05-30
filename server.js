const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connected Database
connectDB();

// Init Middelware
app.use(express.json({ extended: false }));

// Test Command
app.get('/', (req, res) => {
  res.send('API RUNNING');
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//setup of the local server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
