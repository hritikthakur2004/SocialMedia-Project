require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const connectDB = require('./db/db');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');

connectDB()
app.use(cookieParser()); 

app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes)


module.exports = app;

