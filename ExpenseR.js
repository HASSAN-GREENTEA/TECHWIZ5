const express = require('express');
const Expense = require('./ExpenseM');

const router = express.Router();

// Insert Expense Data
router.post('/', async (req, res) => {
  const { userId, tripId, expenseId, amount, category, expenseDate, notes } = req.body;

  try {
    const newExpense = new Expense({
      userId,
      tripId,
      expenseId,
      amount,
      category,
      expenseDate,
      notes,
    });
    await newExpense.save();
    res.status(201).json({ message: 'Expense created successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch Expenses by Trip ID
router.get('/:tripId', async (req, res) => {
  const { tripId } = req.params;

  try {
    const expenses = await Expense.find({ tripId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
