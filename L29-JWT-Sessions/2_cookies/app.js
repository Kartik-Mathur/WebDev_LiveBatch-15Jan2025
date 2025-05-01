const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Send the public folder to the browser
app.use(express.static(path.join(__dirname, 'public')));

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
    console.log(email, password)
    let user = await User.findOne({ email });
    // console.log(user)
    if (user) return res.redirect('/signup.html')

    await User.create({
        email,
        password
    })

    res.redirect('/login.html')
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.redirect('/login.html');

    let myCookieData = {
        id: user._id
    }

    res.cookie('cookieData', JSON.stringify(myCookieData), {
        httpOnly: true // This disables js to access the cookie
    })

    res.redirect('/dashboard.html');
})

app.get('/dashboard', async (req, res) => {
    try {
        let cookieData = JSON.parse(req.cookies.cookieData);
        let id = cookieData.id;
        let user = await User.findOne({ _id: id });
        if (!user) return res.status(400).json({
            msg: 'login again'
        })

        res.redirect('/dashboard.html');
    } catch (error) {
        res.redirect('/login.html')
    }
})

app.get('/isloggedin', async (req, res) => {
    try {
        let cookieData = JSON.parse(req.cookies.cookieData);
        let id = cookieData.id;
        let user = await User.findOne({ _id: id });

        if (!user) return res.status(400).json({
            msg: 'login again',
            isLoggedIn: false
        })

        return res.status(200).json({
            msg: 'Loggin Success',
            isLoggedIn: true,
            user
        })
    } catch (error) {
        res.send('<h1>Login to go to dashboard <a href="/login.html">Login page</a> </h1>')
    }
})

