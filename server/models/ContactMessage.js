// backend/models/ContactMessage.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  reason: { 
    type: String, 
    enum: ['Brand', 'Media', 'Athlete', 'General'], 
    default: 'General' 
  },
  message: { type: String, required: true },
  // Optional field to link inquiry context
  inquiryContext: { type: String, default: 'General Inquiry' }, 
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactSchema);