import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let usersCount = 0;
let allSockets = [];
// allSockets = [socket1, socket2, socket3]
// event -> connection 
wss.on('connection', function connection(socket) {
    usersCount++;

    // For BROADCASTING we need all the sockets
    allSockets.push(socket);

    allSockets.forEach((socket) => {
        socket.send(`Total Users: ${usersCount}`);
    })
});



