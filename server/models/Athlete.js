// backend/models/Athlete.js

const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  country: { type: String, required: true },
  countryCode: { type: String, required: true }, // For flag icons
  bio: { type: String, default: '' },
  image: { type: String, default: 'placeholder.jpg' }, // URL to the photo
  stats: [{
    event: String,
    personalRecord: String,
    seasonBest: String,
  }],
  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Athlete', athleteSchema);