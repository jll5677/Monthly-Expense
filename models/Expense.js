const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    Amount: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Expense = mongoose.model('expense', ExpenseSchema);