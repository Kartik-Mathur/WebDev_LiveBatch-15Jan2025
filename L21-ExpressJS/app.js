const express = require('express');
const app = express();
const PORT = 4444;

// GET request ke badle response bhejne ka code
app.get('/', function (req, res) {
    // console.log(res)
    res.send('Hello world');
})

app.get('/hello', function (request, response) {
    // console.log(res)
    response.send('<h1 style="background-color: black; color: white">Hello! I am a computer</h1>');
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});