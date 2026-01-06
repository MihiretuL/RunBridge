// backend/routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// @route   POST /api/contact
// @desc    Submit a new contact form message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, reason, message, inquiryContext } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all required fields: Name, Email, and Message.' });
  }

  try {
    // 1. Create a new message instance
    const newContact = new ContactMessage({
      name,
      email,
      reason,
      message,
      // Uses the context passed from the frontend (e.g., Request Representation)
      inquiryContext: inquiryContext || 'General Inquiry', 
    });

    // 2. Save the message to MongoDB
    await newContact.save();

    // 3. (Optional future feature: Send email notification to agency)
    // mailer.send(newContact); 

    // 4. Send a success response back to the client
    res.json({ msg: 'Thank you! Your message has been sent and stored successfully.', data: newContact });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error during form submission.');
  }
});

module.exports = router;