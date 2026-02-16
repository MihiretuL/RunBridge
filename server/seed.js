const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Athlete = require('./models/Athlete'); 

dotenv.config();

// --- THE ROSTER DATA ---
// NOTE: Times have been updated to "Elite International Standard" to attract scouts.
const sampleAthletes = [
  {
    name: "Kiros Desta",
    gender: "Male",
    country: "Ethiopia",
    club: "Sululta Base",
    trainingLocation: "Sululta",
    altitudeMeters: 2500,
    image: "/images/img1.jpg",
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Marathon", personalRecord: "2:04:15", isAltitude: false }, // Elite Time
      { event: "Half Marathon", personalRecord: "58:45", isAltitude: false }
    ],
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
  },
  {
    name: "Bekelch Wolde",
    gender: "Male",
    country: "Ethiopia",
    club: "Addis Academy",
    trainingLocation: "Addis Ababa",
    altitudeMeters: 2355,
    image: "/images/img2.jpg",
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "10000m", personalRecord: "26:58.10", isAltitude: false }, // Sub-27 is world class
      { event: "5000m", personalRecord: "12:55.40", isAltitude: false }
    ],
    videoUrl: ""
  },
  {
    name: "Zenash Alemayehu",
    gender: "Female",
    country: "Ethiopia",
    club: "Nike Oregon Project (Former)",
    trainingLocation: "Portland / Sululta",
    altitudeMeters: 0,
    image: "/images/img7.png",
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "5000m", personalRecord: "14:15.20", isAltitude: false }, // Diamond League Level
      { event: "1500m", personalRecord: "3:56.05", isAltitude: false }
    ],
    videoUrl: ""
  },
  {
    name: "Gaddess Bona",
    gender: "Female",
    country: "Ethiopia",
    club: "NN Running Team",
    trainingLocation: "Mekelle",
    altitudeMeters: 2200,
    image: "/images/img3.jpg",
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Half Marathon", personalRecord: "1:04:30", isAltitude: false }, // Major Marathon Winner pace
      { event: "Marathon", personalRecord: "2:17:20", isAltitude: false }
    ],
    videoUrl: ""
  },
  {
    name: "Aynalem Kelmu",
    gender: "Female",
    country: "Ethiopia",
    club: "Tirunesh Dibaba",
    trainingLocation: "Bekoji",
    altitudeMeters: 2800,
    image: "/images/img4.jpg",
    isVerified: false, 
    isFeatured: false,
    stats: [
      { event: "Cross Country", personalRecord: "28:45 (10k XC)", isAltitude: true },
      { event: "10000m", personalRecord: "30:15.83", isAltitude: false }
    ],
    videoUrl: ""
  },
  {
    name: "Bacha Taffess",
    gender: "Male",
    country: "Ethiopia",
    club: "Adidas",
    trainingLocation: "Addis Ababa",
    altitudeMeters: 2355,
    image: "/images/img5.jpg",
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "5000m", personalRecord: "12:58.09", isAltitude: false }, // Breaking 13 is the goal
      { event: "Cross Country", personalRecord: "National Champion '23", isAltitude: true }
    ],
    videoUrl: ""
  },
  {
    name: "Edris Kamal",
    gender: "Male",
    country: "Ethiopia",
    club: "Unattached", 
    trainingLocation: "Bekoji",
    altitudeMeters: 2800,
    image: "/images/img008.jpg",
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Marathon", personalRecord: "2:03:39", isAltitude: false }, // World Major Podium Level
      { event: "Half Marathon", personalRecord: "59:10", isAltitude: false }
    ],
    videoUrl: ""
  },
  {
    name: "Lamecha Turri",
    gender: "Male",
    country: "Ethiopia",
    club: "Nike",
    trainingLocation: "Addis Ababa",
    altitudeMeters: 2355,
    image: "/images/img009.jpg",
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "10000m", personalRecord: "26:50.11", isAltitude: false }, 
      { event: "Cross Country", personalRecord: "World XC Gold", isAltitude: false }
    ],
    videoUrl: ""
  }
];

// --- THE SEED LOGIC ---
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔌 Connected to DB...");

    // 1. Clear existing athletes
    await Athlete.deleteMany({});
    console.log("🧹 Cleared old athlete data...");

    // 2. Insert new athletes
    await Athlete.insertMany(sampleAthletes);
    console.log("✅ Added Elite Pro-Level Athletes!");

    process.exit();
  } catch (err) {
    console.error("❌ Seed Error:", err);
    process.exit(1);
  }
};

seedDB();