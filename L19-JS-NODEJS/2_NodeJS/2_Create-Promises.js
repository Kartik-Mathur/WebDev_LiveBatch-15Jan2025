const fs = require('fs/promises');

const path = require('path');
let fileName = path.join(__dirname, 'song.txt');

fs
    .writeFile(fileName, "HEY!! HEY!!", {
        flag: 'w'
    })
    .then(() => {
        console.log("Data Successfully written");
    })
    .catch(err => {
        console.log(err)
    })

console.log("Hello I am simple print statement");