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
const dbName = 'Tasks'; // Agar DB exist karta hai toh select krega, else create krega new DB

let db = null;

client.connect()
    .then(() => {
        console.log("nodejs connect with mongodb done")
        db = client.db(dbName);
    })
    .catch(err => {
        throw new Error(err.message); // Server ko crash kr dega
    })

// Collection ka naam should be 'Todos' -> To store Documents
app.get('/todos', (req, res) => {
    // returns all the available todos
    let Todos = db.collection('Todos'); // Agar Todos naam ka collection hai toh use krega, else create krega

    Todos.find().toArray()
        .then(data => {
            res.send({
                msg: 'Todos fetched success',
                tasks: data
            })
        })
        .catch(err => {
            res.send({
                msg: err.message
            })
        })
})

app.post('/todos', (req, res) => {
    const { task } = req.body;
    // Add a new todo to the mongodb database
    let Todos = db.collection('Todos'); // Agar Todos naam ka collection hai toh use krega, else create krega

    Todos.insertOne({
        task,
        status: false
    })

    res.send({
        message: "Insertion done",
        task
    });
})

app.put('/todos', (req, res) => {

})

app.delete('/todos', (req, res) => {

})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});