const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// ENV
dotenv.config();

// DATABASE
// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {   useNewUrlParser: true,
        useUnifiedTopology: true },
    () => console.log('Connected to DB!')
)

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3001, () => console.log('Server Running in PORT 3001.'));