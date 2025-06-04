import express from "express";
const app = express();
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public'))); // Public folder ko frontend

// par bhej do
app.set('view engine', 'hbs');
let todos = [];

app.get('/', (req, res) => {
    let data = todos.length > 0 ? todos : null;

    res.render('index', {
        todos: data
    });
})

app.get('/addtodo', (req, res) => {
    const { task, description, type } = req.query;
    todos.push({
        name: task,
        description
    })
    
    if(type) return res.send(todos); // CSR: AXIOS se request aai

    res.redirect('/'); // SSR: Form element se request aai
})

app.listen(4444, () => {
    console.log('http://localhost:4444')
})