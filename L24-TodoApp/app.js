const path = require('path');
const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const PORT = 4444;

app.use(express.json()); // axios sends the json data
app.use(express.urlencoded({ extended: true })); // post request by default 
app.use(express.static(path.join(__dirname, 'public'))); // public folder ko bhejega

let todos = [{
    id: '1',
    task: 'Cricket',
    status: false
}];

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.post('/todos', (req, res) => {
    let { task } = req.body;
    todos.push({
        id: uuid(),
        task,
        status: false
    });

    res.send({
        msg: 'Todo added successfully',
        task
    })
})

app.put('/todos', (req, res) => {
    let { id } = req.body;
    console.log(id)
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
    console.log(id);

    todos = todos.filter(item => {
        return id !== item.id
    })

    res.send({
        msg: 'Todo deleted successfully',
        todos
    })
})

app.put('/clear-completed', (req, res) => {
    todos = todos.filter(item => {
        return item.status == false
    })
    res.send({
        msg: 'Completed tasks cleared'
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});