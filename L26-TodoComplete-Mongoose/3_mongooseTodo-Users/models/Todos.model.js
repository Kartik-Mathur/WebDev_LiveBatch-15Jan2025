const mongoose = require('mongoose');

// 1. Create Schema
const TodoSchema = new mongoose.Schema({
    task: String,
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    user_id: mongoose.Types.ObjectId
})


// 2. Create a model (Collection, in which we insert documents), Consider it as JS class
const Todos = mongoose.model('Todos', TodoSchema);
module.exports = Todos;