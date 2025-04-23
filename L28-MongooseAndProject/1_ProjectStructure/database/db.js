const mongoose = require('mongoose');

async function connectMongo() {
    let url = `mongodb+srv://kartik:kartik@cluster0.97kax2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    await mongoose.connect('mongodb://localhost:27017/todos');
}

module.exports = connectMongo;