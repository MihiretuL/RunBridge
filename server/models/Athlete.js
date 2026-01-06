const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  // --- Identity ---
  name: { type: String, required: true, trim: true },
  dob: { type: Date }, // Crucial for U20 vs Senior categories
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  country: { type: String, required: true, default: 'Ethiopia' },
  countryCode: { type: String, required: true, default: 'ET' },
  
  // --- Professional Context ---
  club: { type: String, default: 'Unattached' }, // e.g., "Taruna Stivava"
  trainingLocation: { type: String }, // e.g., "Sululta, Ethiopia"
  altitudeMeters: { type: Number }, // e.g., 2500 (Crucial for scouts to adjust times)
  
  // --- Verification (The "Trust" Layer) ---
  isVerified: { type: Boolean, default: false },
  verificationSource: { type: String }, // e.g., "Verified by Coach Gemechu"
  
  // --- Media ---
  image: { type: String, default: 'placeholder.jpg' },
  videos: [{ 
    title: String, 
    url: String, // YouTube/Vimeo link
    type: { type: String, enum: ['Race', 'Training', 'Interview'] } 
  }],

  // --- Performance Stats ---
  stats: [{
    event: { type: String, required: true }, // e.g., "5000m"
    personalRecord: { type: String, required: true }, // Display format: "13:20.5"
    timeInSeconds: { type: Number }, // Hidden field for sorting: 800.5
    date: Date,
    location: String,
    isAltitude: { type: Boolean, default: false }
  }],

  // --- Story ---
  bio: { type: String, maxlength: 2000 },
  highlights: [String], // Quick bullet points: "National Junior Champion 2023"

  isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

// Index for faster searching
athleteSchema.index({ name: 'text', club: 'text' }); 

module.exports = mongoose.model('Athlete', athleteSchema);