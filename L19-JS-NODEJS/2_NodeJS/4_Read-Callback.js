const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'song.txt');

fs.readFile(fileName, {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) throw err;
    console.log(data);
})

// fs.readFile(fileName, (err, data) => {
//     if (err) throw err;
//     console.log(data);// Binary Data
//     console.log(data.toString()); // String Data
// })