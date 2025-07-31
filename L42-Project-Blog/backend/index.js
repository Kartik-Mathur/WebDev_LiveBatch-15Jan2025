const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4444;
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// /api/auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use("/api/tags", require("./routes/tags"));

app.get('/api/auth/me', async (req, res) => {
    const { token } = req.cookies;
    console.log(token);
    if (!token) return res.status(404).json({
        message: 'Not logged in user',
        user: null
    })

    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token Data", tokenData);

    const user = await prisma.user.findUnique({
        where: { id: tokenData.id },
        select: { id: true, username: true }
    })
    // console.log(user);
    return res.status(201).json({
        message: 'logged in user',
        user: user
    })

})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});