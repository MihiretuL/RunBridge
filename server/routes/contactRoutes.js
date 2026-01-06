// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// @route   POST /api/contact
router.post('/', async (req, res) => {
  console.log("📥 Receiving Contact Request:", req.body); // LOG THE DATA

  const { name, email, reason, message, inquiryContext } = req.body;

  // 1. Basic Validation
  if (!name || !email || !message) {
    console.log("❌ Validation Failed: Missing Fields");
    return res.status(400).json({ msg: 'Please enter all required fields.' });
  }

  try {
    const newMessage = new ContactMessage({
      name,
      email,
      reason, // This MUST match the enum in the Model
      message,
      inquiryContext
    });

    await newMessage.save();
    console.log("✅ Message Saved to Database!");

    res.status(201).json({ msg: 'Message received! We will contact you shortly.' });

  } catch (err) {
    console.error('❌ Save Error:', err.message); // THIS WILL SHOW YOU WHY IT FAILED
    res.status(500).json({ msg: 'Server Error: ' + err.message });
  }
});

// @route   GET /api/contact
router.get('/', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    console.log(`📤 Sending ${messages.length} messages to Admin Dashboard`);
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/contact/:id
router.put('/:id', async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ msg: 'Message not found' });

    message.status = req.body.status || message.status;
    await message.save();

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;