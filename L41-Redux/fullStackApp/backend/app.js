const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todos = ['Cricket', 'Dance', 'Sing'];

// http://localhost:4444/get-todos
app.get('/get-todos', (req, res) => {
    res.status(200).json({
        todos
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});