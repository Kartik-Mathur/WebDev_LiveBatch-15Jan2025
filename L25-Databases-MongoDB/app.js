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
const dbName = 'testDB'; // Agar DB exist karta hai toh select krega, else create krega new DB
client.connect().then(() => {
    console.log("NODEJS successfully connected to mongoDB");

    const db = client.db(dbName);
    const users = db.collection('users');
    users.find({}).toArray()
        .then((data) => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});