const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Todos'; // Agar DB exist karta hai toh select krega, else create krega new DB

app.get('/todos', (req, res) => {
    // returns all the available todos
})

app.post('/todos', (req, res) => {
    // Add a new todo to the mongodb database
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});