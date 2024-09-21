const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  tripId: { type: String, required: true, unique: true },
  tripName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  destination: { type: String, required: true },
  budget: { type: Number, required: true },
  status: String
});

module.exports = mongoose.model('Trip', TripSchema);
