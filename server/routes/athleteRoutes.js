// backend/routes/athleteRoutes.js

const express = require('express');
const router = express.Router();
const Athlete = require('../models/Athlete');

// @route   GET /api/athletes
// @desc    Get all athletes (Directory Page)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const athletes = await Athlete.find().sort({ name: 1 }); // Sort by name
    res.json(athletes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/athletes/featured
// @desc    Get featured athletes (Homepage)
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const featured = await Athlete.find({ isFeatured: true }).limit(3);
    res.json(featured);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/athletes/:id
// @desc    Get single athlete by ID (Profile Page)
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    if (!athlete) {
      return res.status(404).json({ msg: 'Athlete not found' });
    }
    res.json(athlete);
  } catch (err) {
    console.error(err.message);
    // Check if the ID is malformed (e.g., shorter than a valid ObjectId)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Athlete not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;