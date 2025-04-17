const path = require('path');
const express = require('express');
const app = express();
const Todos = require('./models/Todos.model');
const Users = require('./models/Users.model');
const PORT = 4444;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Har baari mei ek user ko fetch kar raha hoon, and yeh user abhi ke liye same hai,
// Because we have not implemented login and signup functionality yet
app.use(async (req, res, next) => {
    let User = await Users.findOne({
        name: 'Vaibhav'
    });

    req.user = User; // Add the user inside the req object
    next();
})

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Tasks').then((data) => {
    console.log("DB CONNECTED");
})

// 3. Creating Documents
app.post('/todos', (req, res) => {
    const { task } = req.body;
    console.log(req.user); // We can now use the User via req.user, that we have added inside the req object
    let newTodo = new Todos({ task, user_id: req.user._id });
    newTodo.save()
    // console.log(newTodo);
    res.send({
        message: "Insertion done",
        task: newTodo
    });
})


// Collection ka naam should be 'Todos' -> To store Documents
app.get('/todos', (req, res) => {
    Todos.find()
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


app.put('/todos', async function (req, res) {
    const { id } = req.body;

    // Jab tak DB se find nahi hota aage nahi badhega
    let todo = await Todos.findOne({ _id: id });
    /*
    {
        task: 'Sing',
        status: false,
        _id: new ObjectId('68011f516f31c2a6eae1f033'),
        date: 2025-04-17T15:33:37.750Z
    }
    */
    todo.status = !todo.status;
    await todo.save(); // To again save this code

    res.json({
        message: "Status updated successfully"
    })
})

app.delete('/todos', async (req, res) => {
    const { id } = req.body;

    await Todos.deleteOne({
        _id: id
    })

    res.status(205).json({
        message: "Todo deleted successfully"
    })
})

app.put('/clear-completed', (req, res) => {
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