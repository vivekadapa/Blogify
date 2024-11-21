const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3002",
    credentials: true,
}))

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

mongoose
    .connect('mongodb://localhost:27017/blog')
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((error) => console.error(error));
