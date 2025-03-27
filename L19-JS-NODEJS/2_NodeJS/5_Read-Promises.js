const fs = require('fs/promises');

const path = require('path');
let fileName = path.join(__dirname, 'song.txt');

fs.readFile(fileName, 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })