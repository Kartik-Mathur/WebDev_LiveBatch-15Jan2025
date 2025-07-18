const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// /api/auth
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});