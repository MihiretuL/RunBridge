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
const allowedOrigins = [
  'http://localhost:5173', // Vite Local
  'http://localhost:3000', // React Scripts Local
  'https://runbridge-pro.vercel.app', // <--- Your Future Live Site
  'https://www.runbridgepro.com' ,    // <--- Your Custom Domain
  'https://runbridge-igsrrpii7-didymosls-projects.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, or Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true // Optional: enables cookies/sessions if you need them later
}));

// C. Body Parsing (Allows your backend to read JSON data)
app.use(express.json());


// ------------------------------------------------------------------
// 2. DATABASE CONNECTION
// ------------------------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI) // Removed deprecated options (not needed in Mongoose 6+)
  .then(() => console.log("⚡ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ------------------------------------------------------------------
// 3. ROUTES SETUP
// ------------------------------------------------------------------
app.use("/api/athletes", require("./routes/athleteRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use('/api/auth', require('./routes/authRoutes'));

// Simple "Health Check" route to test if server is alive
app.get('/', (req, res) => {
  res.send('RunBridge Pro API is running...');
});

// ------------------------------------------------------------------
// 4. SERVER START
// ------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});