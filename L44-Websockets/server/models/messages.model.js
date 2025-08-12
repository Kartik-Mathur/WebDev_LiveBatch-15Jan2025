import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    message: String,
    room: String,
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Messages', messageSchema);