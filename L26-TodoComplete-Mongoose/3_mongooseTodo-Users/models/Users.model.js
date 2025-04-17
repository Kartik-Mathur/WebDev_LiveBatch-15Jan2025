const mongoose = require('mongoose');

// 1. Create Schema
const userSchema = new mongoose.Schema({
    name: String,
    date: { type: Date, default: Date.now },
})


// 2. Create a model (Collection, in which we insert documents), Consider it as JS class
const Users = mongoose.model('Users', userSchema);
module.exports = Users;