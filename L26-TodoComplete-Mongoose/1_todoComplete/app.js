const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { MongoClient, ObjectId } = require('mongodb');

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
    const { id } = req.body;
    let Todos = db.collection('Todos'); // Agar Todos naam ka collection hai toh use krega, else create krega

    Todos.findOne({
        _id: new ObjectId(id)
    })
        .then(data => {
            // First find the current value of status, jo task ki id user ne provide kari hai: data mei we will get the
            // task

            Todos.updateOne({
                _id: new ObjectId(id)
            }, {
                $set: {
                    status: !data.status
                }
            })

            res.json({
                message: "Status updated successfully"
            })
        })

})

app.delete('/todos', (req, res) => {
    const { id } = req.body;

    let Todos = db.collection('Todos'); // Agar Todos naam ka collection hai toh use krega, else create krega

    Todos.deleteOne({
        _id: new ObjectId(id)
    })

    res.status(205).json({
        message: "Todo deleted successfully"
    })
})

app.put('/clear-completed', (req, res) => {
    let Todos = db.collection('Todos');
    Todos.deleteMany({
        status: true
    }).then((data) => {
        console.log(data);
        res.send({
            msg: "All completed tasks are cleared",
            data
        });
    }).catch((err) => {
        res.send({
            msg: err.message
        })
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});