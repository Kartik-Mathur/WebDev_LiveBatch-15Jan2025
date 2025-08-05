import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// event -> connection 
wss.on('connection', function connection(ws) {
    // setInterval(() => {
    //     ws.send('HelloWorld');
    // }, 1000);

});



