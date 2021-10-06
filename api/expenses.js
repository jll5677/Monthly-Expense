const express = require('express');
const router = express.router();

// load expense model
const expense = require('../../models/Expense');

// @route GET api/expense/test
// @description test expense route
// @access Public
router.get('/test', (req, res) => res.send('expense route testing!'));

// @route GET api/expenses
// @description Get all expenses
// @access Public
router.get('/', (req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(404).json({ noexpensesfound: 'No Expenses found' }));
});

// @route GET api/expenses/:id
// @description Get single expense by id
// @access Public
router.get('/:id', (req, res) => {
    Expense.findById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err => res.status(404).json({ noexpensesfound: 'No Expenses found' }));
});

// @route GET api/expenses
// @description add/save expense
// @access Public
router.post('/', (req, res) => {
    Expense.create(req.body)
        .then(expense => res.json({ msg: 'Expense added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this expense' }));
});

// @route GET api/expenses/:id
// @description Update expense
// @access Public
router.put('/:id', (req, res) => {
    Expense.findByIdAndUpdate(req.params.id, req.body)
        .then(expense => res.json({ msg: 'Updated successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
});

// @route GET api/expenses/:id
// @description Delete expense by id
// @access Public
router.delete('/:id', (req, res) => {
    Expense.findByIdAndRemove(req.params.id, req.body)
        .then(expense => res.json({ msg: 'Expense entry deleted successfully' }))
        .catch(err => res.json(400).json({ error: "Expense doesn't exist" }));
})

module.exports = router;