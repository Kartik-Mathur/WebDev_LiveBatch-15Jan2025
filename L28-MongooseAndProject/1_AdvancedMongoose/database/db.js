const mongoose = require('mongoose');

async function connectMongo() {
    await mongoose.connect('mongodb://localhost:27017/todos');
}

module.exports = connectMongo;