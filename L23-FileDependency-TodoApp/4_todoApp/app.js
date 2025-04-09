const path = require('path');
const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const PORT = 4444;

app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded()); // To make req.body readable we use this

let todos = [
    /*
    {  
        task: 'Cricket',
        id: unique,
        status: true/false
    }
    */
];

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.post('/todos', (req, res) => {
    const { task } = req.body;
    todos.push({
        task,
        status: false,
        id: uuid()
    })
    res.send({
        msg: 'Task added successfully',
        task
    });
})

app.put('/todos', (req, res) => {
    const { id } = req.body;

    todos = todos.map((item) => {
        if (id == item.id) {
            return {
                ...item,
                status: !item.status
            }
        }
        else return item;
    })

    res.send({
        msg: 'Task status updated successfully',
        todos
    })
})
app.delete('/todos', (req, res) => {
    const { id } = req.body;

    todos = todos.filter(item => {
        return id !== item.id
    })

    res.send({
        msg:'Todo deleted successfully',
        todos
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});