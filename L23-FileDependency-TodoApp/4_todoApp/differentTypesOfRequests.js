const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded()); // To make req.body readable we use this

app.get('/', (req, res) => {
    const { name } = req.query;
    console.log(name)
    res.send(`Hello ${name}`);
})

app.post('/', (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    res.send(`Hello via post request ${name}`);
})

app.put('/',(req,res)=>{
    const { name } = req.body;
    res.send(`Hello via put request ${name}`);
})

app.delete('/',(req,res)=>{
    const { name } = req.body;
    res.send(`Hello via delete request ${name}`);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});