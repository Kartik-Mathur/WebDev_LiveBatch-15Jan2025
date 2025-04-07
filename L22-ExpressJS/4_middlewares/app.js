const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

// Generic middleware
app.use(function (req, res, next) {
    console.log("Running middleware-1");

    next(); // To go ahead and move towards the next function we call this
})

app.use(function (req, res, next) {
    console.log("Running middleware-2");
    next();
})

// Path start match
// Will run for: /greet, /greet/hello, /greet/abc/def/..../xyz
// Will not run for: /greet-hello, /greethello
app.use('/greet', function (req, res, next) {
    console.log("Running middleware-3")
    next();
})

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/greet', (req, res) => {
    res.send("Aaiye!!! Welcome");
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});