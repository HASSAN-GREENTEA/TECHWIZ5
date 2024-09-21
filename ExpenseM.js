const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  tripId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Trip' },
  expenseId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  expenseDate: { type: Date, required: true },
  notes: { type: String, required: false },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
