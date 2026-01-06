// server/models/ContactMessage.js
const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  reason: {
    type: String,
    required: true,
    enum: ['General', 'scouting', 'sponsorship', 'media', 'representation'] 
  },
  message: {
    type: String,
    required: true
  },
  inquiryContext: {
    type: String, // Stores "Inquiry regarding athlete: Birhanu Legese"
    default: 'General Inquiry'
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Replied', 'Archived'],
    default: 'New'
  }
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);