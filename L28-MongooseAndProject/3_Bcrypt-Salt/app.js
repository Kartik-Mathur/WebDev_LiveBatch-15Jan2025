const path = require('path');
const express = require('express');
const User = require('./models/User');
const bcrypt = require('bcrypt')
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo-app-23apr').then((data) => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
})

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(401).json({
            message: 'User already exist'
        })

        // const hash = await bcrypt.hash(password, 10);
        await User.create({
            email,
            password
        })
        res.status(200).json({
            message: 'User signup success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Signup failed',
            error: error.message
        })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(401).json({
        message: 'User not present, invalid email id'
    })

    const match = await bcrypt.compare(password, user.password);
    if (match) res.status(200).json({
        message: 'Login success'
    })
    else res.status(400).json({
        message: 'Login failed, incorrect password'
    })
})

