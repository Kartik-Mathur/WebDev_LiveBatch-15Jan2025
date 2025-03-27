const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'song.txt');

const data = fs.readFileSync(fileName, {
    encoding: 'utf-8'
});
console.log(data);
console.log("I am print statement");