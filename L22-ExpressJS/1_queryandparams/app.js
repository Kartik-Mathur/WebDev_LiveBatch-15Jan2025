const express = require('express');
const app = express();
const PORT = 4444;

app.get('/', (req, res) => {
    res.send("Hello world");
})

// kisi ko greet karna hoga, lets take the name from query parameter
app.get('/greet', (req, res) => {
    // console.log(req.query);
    const name = req.query.name;
    res.send(`Welcome to the app, ${name}`);
})

// Params
// URL: http://localhost:4444/greet/kartik
app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    /*
    req.params={
        name: 'kartik'
    }
    */
    res.send(`Welcome to the app vai params route, ${name}`);
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})