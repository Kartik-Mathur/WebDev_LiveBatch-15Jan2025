const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/myDB').then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
}).catch(err => {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    console.log(user)
    if (user) return res.status(400).json({
        msg: 'Email already exists'
    })

    await User.create({
        email,
        password
    })

    res.send({
        msg: 'User signup success'
    })
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        msg: 'Email doesnt exists, try a valid email'
    })
    if (user.password !== password) return res.status(400).json({
        msg: 'password invalid'
    })

    let myCookieData = {
        id: user._id
    }

    res.cookie('cookieData', JSON.stringify(myCookieData))

    res.send({
        msg: 'Login Success'
    })

})

app.get('/dashboard', async (req, res) => {
    let cookieData = JSON.parse(req.cookies.cookieData);
    let id = cookieData.id;
    let user = await User.findOne({ _id: id });
    if (!user) return res.status(400).json({
        msg: 'login again'
    })

    res.send({
        msg: 'Welcome to dashboard'
    })
})



