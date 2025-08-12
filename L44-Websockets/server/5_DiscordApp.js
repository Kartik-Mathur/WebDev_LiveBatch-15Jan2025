import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let usersCount = 0;
let allSockets = [
    // {socket, room} // which room is this socket subscribed to
    /*
        {socket: 12, room: 'general'}
        {socket: 12, room: 'cpp'}
        {socket: 12, room: 'java'}
        
        {socket: 15, room: 'cpp'}
        
        {socket: 16, room: 'java'}
    */
];

let allMessages = [
    // {message: 'Hello anybody knows pointer?', socket1, room:'cpp'}
    // { message: 'Hello anybody knows pointer?', room: 'java' },
    // { message: 'Hello anybody? Graphs?', room: 'cpp' },
    // { message: 'Hello anybody? pointer?', room: 'cpp' },
    // { message: 'Welcome to the App!!', room: 'general' },
    // { message: 'Here are the basic rules you need to take care of...', room: 'general' }
];

// function brodcast(message) {
//     allSockets.forEach((socket) => {
//         // broadcast to all the clients present inside
//         // the allSockets array
//         // This will trigger message event for clients
//         socket.send(message);
//     })
// }

function joinRoom(socket, room) {
    allSockets.forEach((socketItem) => {
        if (socketItem.socket == socket && socketItem.room == room) return;
    })
    allSockets.push({ socket, room });
}

function emitAllMessagesToSocket(socket, room) {
    // {message: 'Hello anybody? pointer?', socket3, room:'cpp'}
    allMessages.forEach((messageDetail) => {
        if (room === messageDetail.room) {
            socket.send(messageDetail.message);
        }
    })
}

// This function will send the message to all the sockets with given room
function broadcastMessageToRoom(message, room) {
    allSockets.forEach(socketDetail => { // {socket: 12, room: 'general'}
        if (socketDetail.room === room) socketDetail.socket.send(message)
    })
}

// allSockets = [socket1, socket2, socket3]
// event -> connection 
wss.on('connection', function connection(socket) {
    usersCount++;
    // Initially jo bhi banda aaya vo general room mei add ho gaya
    joinRoom(socket, 'general');
    emitAllMessagesToSocket(socket, 'general');

    socket.on("message", (data) => {
        data = data.toString();
        data = JSON.parse(data);
        console.log(data);
        /*
        {
            type: 'joinroom', 
            payload:{
                room: 'cpp' // Maybe first time join kar raha hai or old user
            }
            --> ispar user ko mujhe saare messages bhejne padenge room ke
        }
        */
        if (data.type === 'joinroom') {
            joinRoom(socket, data.payload.room);
            emitAllMessagesToSocket(socket, data.payload.room);
        }
        else if (data.type === 'chat') {
            /*
            {
                type: 'chat', 
                payload:{
                    message: 'This is some random message',
                    room: 'cpp' 
                }
            } 
            --> ispar user ke message ko saare 'cpp' room walo ko bhejo
            */
            // {message: 'Hello anybody knows pointer?', socket1, room:'cpp'}
            allMessages.push({
                message: data.payload.message,
                socket,
                room: data.payload.room
            })
            broadcastMessageToRoom(data.payload.message, data.payload.room);
        }
    })

    // Jab bhi koi client disconnect hoga
    socket.on('close', () => {
        usersCount--;
    })
});



