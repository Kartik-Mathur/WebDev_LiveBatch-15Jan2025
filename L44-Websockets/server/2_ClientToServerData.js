import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// event -> connection 
wss.on('connection', function connection(ws) {
    ws.send("Welcome to the server");

    // event-> message, this will get triggered
    // when client will send a message
    ws.on('message', (data) => {
        console.log(data.toString());
        // We sent the data back to the client
        ws.send(`You sent ${data.toString()}`)
    })
});



