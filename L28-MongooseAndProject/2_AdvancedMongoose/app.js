const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/myDB')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })

// Customers model
const customerSchema = new mongoose.Schema({
    name: String,
    email: String
})
const Customers = mongoose.model('customers', customerSchema);

// Orders model
const ordersSchema = new mongoose.Schema({
    item: String,
    customerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'customers'
    }
})

const Orders = mongoose.model('orders', ordersSchema);

app.get('/customers', async (req, res) => {
    let data = await Customers.find();
    res.send({
        message: 'Customers fetched successfully',
        customers: data
    })
})

app.get('/orders', async (req, res) => {
    let data = await Orders.find().populate('customerId');
    
    res.send({
        message: 'Orders fetched successfully',
        orders: data
    })
})


