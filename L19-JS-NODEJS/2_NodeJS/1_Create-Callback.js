const fs = require('fs'); // Yeh nodejs ke saath aata hai by-default
const path = require('path'); // To join two paths correctly
// let fileName = __dirname+'/'+ 'song.txt';
let fileName = path.join(__dirname, 'song.txt');
// Current file ke parent tak ka path in my system
console.log(__dirname+'/'+fileName);
fs.writeFile(fileName, "Hello World", (err) => {
    if (err) throw err;
    console.log("File written successfully");
});

console.log("I am another piece of code!");