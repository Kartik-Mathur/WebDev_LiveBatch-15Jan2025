const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const jwt = require('jsonwebtoken');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const JWT_SECRET = 'Yeh hai mera secret code, jo koi guess hi nahi kr paega, kyunki ..'

app.get('/get-token', (req, res) => {
    let token = jwt.sign({
        name: 'Aman',
        date: '14 Feb 2026',
        superAdmin: false
    }, JWT_SECRET);

    res.send(token);
})

app.get('/check-token', (req, res) => {
    let { token } = req.query;
    try {
        let data = jwt.verify(token, JWT_SECRET);

        res.send({
            msg: 'Token is genuine',
            data
        })
    } catch (error) {
        res.send({
            msg: 'Token ke saath chedh khaani kari gai hai',
            err: error.message
        })
    }

})

app.get('/delete-database', function (req, res, next) {
    let { token } = req.query;
    let data = jwt.verify(token, JWT_SECRET);

    if (data.superAdmin) return next();
    else res.status(404).send({
        msg: 'Invalid request'
    })

}, (req, res) => {
    res.send({
        msg: 'Poora Data base udda diya'
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});