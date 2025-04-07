const express = require('express');
const app = express();
const path = require('path'); // provided by nodejs bydefault

// Middleware: Built-in middleware
// By default this will work for '/' request and it will load the index.html
// on to the browser
app.use(express.static(path.join(__dirname, 'public')));

// This will not work if there is index.html inside the public folder
app.get('/', (req, res) => {
    res.send("Hiii!!");
})


app.listen(5555, () => {
    console.log("http://localhost:5555");
})