const path = require('path');
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
// http://localhost:4444/todos/, METHOD: GET
app.use('/todos', todosRouter);

// Will run for /todos, /todos/abc/deg, /todos/abc...../xyz
// Will not run for: /todosabc

// Coding Blocks ke first floor par lecture hall 2
// If inside CB: first floor par lecture hall 2
// If already on first floor: lecture hall 2

// SOME MORE EXAMPLES: 
// app.use('/users', someOtherFileToHandleThis);
// app.use('/superadmin', someOtherFileToHandleThis);
// app.use('/admin', someOtherFileToHandleThis);

