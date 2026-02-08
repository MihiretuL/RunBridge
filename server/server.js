// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------------------------------------------------------
// 1. MIDDLEWARE
// ------------------------------------------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------------------------------------------
// 2. DATABASE CONNECTION
// ------------------------------------------------------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("⚡ MongoDB connected successfully."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ------------------------------------------------------------------
// 3. ROUTES SETUP
// ------------------------------------------------------------------
app.use("/api/athletes", require("./routes/athleteRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use('/api/auth', require('./routes/authRoutes'));

// ------------------------------------------------------------------
// 4. SERVER START
// ------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
