import getDate as utility from '../utility/utility.js';

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default:Date,
        require: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = expense = mongoose.model('expense', expenseSchema);