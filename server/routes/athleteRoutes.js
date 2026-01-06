// const express = require('express');
// const router = express.Router();
// const Athlete = require('../models/Athlete');

// // @route   GET /api/athletes
// // @desc    Get athletes with filtering (The "Scout" View)
// // @access  Public
// router.get('/', async (req, res) => {
//   try {
//     const { gender, event, club, verified } = req.query;

//     // Build a dynamic query object
//     let query = {};

//     if (gender) query.gender = gender;
//     if (club) query.club = new RegExp(club, 'i'); // Case-insensitive search
//     if (verified === 'true') query.isVerified = true;
//     if (event) {
//       // Find athletes who have a stat entry for this specific event
//       query['stats.event'] = event;
//     }

//     // Execute query
//     // We sort by 'isVerified' first (verified athletes appear top) then by name
//     const athletes = await Athlete.find(query)
//       .sort({ isVerified: -1, createdAt: -1 });

//     res.json(athletes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   GET /api/athletes/featured
// // @desc    Get elite featured athletes
// // @access  Public
// router.get('/featured', async (req, res) => {
//   try {
//     // Only show featured AND verified athletes on the homepage for credibility
//     const featured = await Athlete.find({ isFeatured: true, isVerified: true })
//       .limit(4)
//       .sort({ updatedAt: -1 }); 
      
//     res.json(featured);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   GET /api/athletes/:id
// // @desc    Get single athlete profile
// // @access  Public
// router.get('/:id', async (req, res) => {
//   try {
//     const athlete = await Athlete.findById(req.params.id);
//     if (!athlete) return res.status(404).json({ msg: 'Athlete not found' });
//     res.json(athlete);
//   } catch (err) {
//     if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'Athlete not found' });
//     res.status(500).send('Server Error');
//   }
// });

// module.exports = router;

// server/routes/athleteRoutes.js

const express = require('express');
const router = express.Router();
const Athlete = require('../models/Athlete');

// ==============================================================================
// PUBLIC ROUTES (For the Website)
// ==============================================================================

// @route   GET /api/athletes
// @desc    Get all athletes (with optional server-side filtering)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { search, event, gender, country } = req.query;
    
    // Build a dynamic query object
    let query = {};

    // 1. Search Logic (Matches Name OR Club)
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } }, // 'i' = case insensitive
        { club: { $regex: search, $options: 'i' } }
      ];
    }

    // 2. Filter by Specific Fields
    if (gender) query.gender = gender;
    if (country) query.country = country;
    
    // 3. Filter by Event (checks if the event exists in the stats array)
    if (event && event !== 'All') {
      query['stats.event'] = event;
    }

    // execute query
    // Sort: Verified athletes first, then by Name
    const athletes = await Athlete.find(query)
      .sort({ isVerified: -1, name: 1 });

    res.json(athletes);
  } catch (err) {
    console.error('Error fetching athletes:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/athletes/featured
// @desc    Get top 3 featured athletes for the Homepage
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    // Logic: Must be 'isFeatured' AND 'isVerified' to be on the home page
    const featured = await Athlete.find({ isFeatured: true }) // You can add { isVerified: true } here if you want strict rules
      .limit(3)
      .sort({ updatedAt: -1 });

    res.json(featured);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/athletes/:id
// @desc    Get a single athlete's full profile
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
    // If the ID format is invalid (e.g. "123" instead of ObjectId), return 404
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Athlete not found' });
    }
    res.status(500).send('Server Error');
  }
});

// ==============================================================================
// ADMIN ROUTES (For your Dashboard / Postman)
// ==============================================================================

// @route   POST /api/athletes
// @desc    Create a new athlete profile
// @access  Private (Public for MVP)
router.post('/', async (req, res) => {
  try {
    // Basic validation
    if (!req.body.name || !req.body.country) {
      return res.status(400).json({ msg: 'Name and Country are required' });
    }

    const newAthlete = new Athlete(req.body);
    const athlete = await newAthlete.save();

    res.json(athlete);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/athletes/:id
// @desc    Update an athlete (e.g., Mark as Verified, Add Stats)
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    let athlete = await Athlete.findById(req.params.id);
    if (!athlete) return res.status(404).json({ msg: 'Athlete not found' });

    // Update fields
    athlete = await Athlete.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // Return the updated document
    );

    res.json(athlete);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/athletes/:id
// @desc    Delete an athlete
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    if (!athlete) return res.status(404).json({ msg: 'Athlete not found' });

    await athlete.deleteOne(); // or findByIdAndDelete

    res.json({ msg: 'Athlete removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;