const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectMongo = require('./database/db');

connectMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})
    .catch(err => {
        throw Error(err);
    })

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);
