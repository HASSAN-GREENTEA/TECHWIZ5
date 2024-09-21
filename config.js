const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hassanjaved:3KOOWgK8c0P4wVeb@tripbudgeter.p59xn.mongodb.net/?retryWrites=true&w=majority&appName=tripbudgeter');
    console.log(chalk.green.inverse('MongoDB connected'));
  } catch (error) {
    console.error(chalk.red.inverse('MongoDB connection failed:', error.message));
    process.exit(1);
  }
};

module.exports = connectDB;
