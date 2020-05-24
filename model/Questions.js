const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;