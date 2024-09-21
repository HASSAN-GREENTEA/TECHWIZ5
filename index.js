const express = require('express');
const connectDB = require('./config');
const authRoutes = require('./routes/Auth');
const tripRoutes = require('./routes/Trip'); 
const expenseRoutes = require('./routes/Expense'); // Import expense routes
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/expenses', expenseRoutes); // Use expense routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
