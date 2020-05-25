const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions"
    },
    body:{
        type: String,
        required: true,
        minlength: 2
    },
    answered: {
        type: Date,
        default: Date.now
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName: {
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
    created: {
        type: Date,
        default: Date.now
    },
    answers: [AnswerSchema],
    questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions"
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;