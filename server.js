const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3030;

require('dotenv').config();
require('./db/db');

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'some cool word',
    resave: false,
    saveUninitialized: false
}));

const userRouter = require('./routes/user');
const questionRouter = require('./routes/question');

app.use('/user', userRouter);
app.use('/question', questionRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})