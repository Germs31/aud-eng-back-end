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
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;