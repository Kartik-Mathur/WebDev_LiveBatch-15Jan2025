import express from "express";
const app = express();

app.set('view engine', 'hbs');
// app.set('views', 'pages'); // To rename the folder to pages 
let todos = [];

app.get('/', (req, res) => {
    let data = todos.length > 0 ? todos : null;

    res.render('index', {
        todos: data
    });
})

app.get('/addtodo', (req, res) => {
    const { task, description } = req.query;
    todos.push({
        name: task,
        description
    })

    res.redirect('/'); // It simply means GET request on '/'
    // res.render('index', {
    //     todos: todos
    // })
})

app.listen(4444, () => {
    console.log('http://localhost:4444')
})