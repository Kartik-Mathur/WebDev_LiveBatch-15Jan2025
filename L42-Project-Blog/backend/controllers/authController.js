const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports.postSignup = async function (req, res) {
    try {
        const { username, email, password } = req.body;

        const hashed = await bcrypt.hash(password, 12);
        const newUser = await prisma.user.create({ data: { username, email, password: hashed } });
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 86400000,
        });

        const user = await prisma.user.findUnique({
            where: { id: newUser.id },
            select: { id: true, username: true, email: true },
        });
        res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Signup failed', error });
    }
}

module.exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ user: { id: user.id, username: user.username, email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login failed' });
    }
};