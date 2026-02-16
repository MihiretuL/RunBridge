const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require('helmet');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------------------------------------------------------
// 1. SECURITY & MIDDLEWARE
// ------------------------------------------------------------------

// A. Helmet (Adds security headers to every response)
app.use(helmet());

// B. CORS (Restricts who can talk to your backend)
// This is your "VIP Guest List". Only these websites can fetch data.
const allowedOrigins = [
  'http://localhost:5173',          // Your PC (Vite)
  'http://localhost:3000',          // Your PC (React Scripts)
  'https://runbridgepro.com',       // <--- 🚨 YOUR NEW LIVE DOMAIN
  'https://www.runbridgepro.com',   // <--- YOUR NEW LIVE DOMAIN (WWW)
  'https://runbridge-pro.vercel.app', // Your Vercel Backup
  'https://runbridge-igsrrpii7-didymosls-projects.vercel.app' // Vercel Preview
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true // Allows cookies/sessions if you add login features later
}));

// C. Body Parsing (Allows your backend to read JSON data)
app.use(express.json());


// ------------------------------------------------------------------
// 2. DATABASE CONNECTION
// ------------------------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("⚡ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ------------------------------------------------------------------
// 3. ROUTES SETUP
// ------------------------------------------------------------------
app.use("/api/athletes", require("./routes/athleteRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use('/api/auth', require('./routes/authRoutes'));

// Simple "Health Check" route
app.get('/', (req, res) => {
  res.send('RunBridge Pro API is running...');
});

// ------------------------------------------------------------------
// 4. SERVER START
// ------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});