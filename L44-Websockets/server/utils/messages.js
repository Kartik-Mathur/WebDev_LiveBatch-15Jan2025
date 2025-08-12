import Messages from '../models/messages.model.js';

class Message {
    static addMessageToRoom(message, room) {
        return new Promise((res, rej) => {
            Messages.create({
                message,
                room
            }).then(() => {
                res("Message insertion success")
            })
        })
    }
    static getAllMessagesOfRoom(room) {
        return new Promise((res, rej) => {
            Messages.find({
                room
            }).then((messages) => {
                res(messages)
            }).catch(err => {
                rej("Not able to fetch messages of a room")
            })
        })
    }
    // static getAllMessagesLimit(){}
};


export default Message;