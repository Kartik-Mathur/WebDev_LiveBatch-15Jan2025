const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    console.log("Inside pre-save", this);
    const hash = await bcrypt.hash(this.password, 10);
    console.log(hash)
    this.password = hash;
    next();
})

module.exports = mongoose.model('users', userSchema);