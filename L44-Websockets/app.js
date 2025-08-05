import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let usersCount = 0;
let allSockets = [];

function brodcast(data) {
    allSockets.forEach((socket) => {
        // broadcast to all the clients present inside
        // the allSockets array
        // This will trigger message event for clients
        socket.send(data);
    })
}

// allSockets = [socket1, socket2, socket3]
// event -> connection 
wss.on('connection', function connection(socket) {
    usersCount++;
    allSockets.push(socket);

    brodcast(`Total users: ${usersCount}`);

    socket.on("message", (data) => {
        data = data.toString();
        // Jo bhi client data bhejega vo hum sabhi par
        // broadcast kar rhey hai, default functionality banadi
        brodcast(data);
    })

    // Jab bhi koi client disconnect hoga
    socket.on('close', () => {
        usersCount--;
    })
});



