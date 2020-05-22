const express = require('express');
const app = express();

const PORT = 3030;
require('dotenv').config();
require('./db/db');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})