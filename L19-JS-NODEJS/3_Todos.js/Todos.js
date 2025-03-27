let fs = require('fs/promises');
let fsSync = require('fs');

const path = require('path');
class Todos {
    static addTask(name) {
        let filePath = path.join(__dirname, 'data', 'todos.json');
        // Read the file
        fs.readFile(filePath, 'utf-8')
            .then(data => {
                data = JSON.parse(data);
                data.push(name);
                fs.writeFile(filePath, JSON.stringify(data))
                    .then(() => {
                        console.log("File Write Success");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }
    static deleteTask(name) {
        let filePath = path.join(__dirname, 'data', 'todos.json');

        fs.readFile(filePath, 'utf-8')
            .then(data => {
                data = JSON.parse(data);
                data = data.filter(d => d != name);

                fs.writeFile(filePath, JSON.stringify(data))
                    .then(() => {
                        console.log("Task Delete Success");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }
    
    // Homework
    static updateTask() { }

    static getAllTasks() {
        let filePath = path.join(__dirname, 'data', 'todos.json');
        // Read the file
        let data = fsSync.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
}


// Todos.addTask("Cricket");
// Todos.addTask("Hockey");
// Todos.addTask("Coding");

// Todos.updateTask("Hockey", "Men's Hockey");

// Todos.deleteTask("Cricket");

console.log(Todos.getAllTasks());