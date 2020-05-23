const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    emial:{
        type: String,
        required: true,
        unique: true
    },
    fistName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: true
})

const User = mongoose.model('User', UserSchema);

module.exports = User;