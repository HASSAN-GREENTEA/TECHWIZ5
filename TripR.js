const express = require('express');
const Trip = require('./TripM');

const router = express.Router();

// Insert Trip Data
router.post('/', async (req, res) => {
  const { userId, tripId, tripName, startDate, endDate, destination, budget } = req.body;

  try {
    const newTrip = new Trip({
      userId,
      tripId,
      tripName,
      startDate,
      endDate,
      destination,
      budget,
      status,
    });
    await newTrip.save();
    res.status(201).json({ message: 'Trip created successfully', trip: newTrip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch Trips by User ID
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const trips = await Trip.find({ userId });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
