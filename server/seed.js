// // server/seed.js
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Athlete = require('./models/Athlete'); // Adjust path if needed

// dotenv.config();

// // --- THE ROSTER DATA ---
// const sampleAthletes = [
//   {
//     name: "Kiros Desta",
//     gender: "Male",
//     country: "Ethiopia",
//     club: "Sululta Base",
//     trainingLocation: "Sululta",
//     altitudeMeters: 2500,
//     image: "/images/img1.jpg",
//     isVerified: true,
//     isFeatured: true,
//     stats: [
//       { event: "Marathon", personalRecord: "2:06:15", isAltitude: false },
//       { event: "Half Marathon", personalRecord: "59:45", isAltitude: false }
//     ],
//     videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4"
//   },
//   {
//     name: "Bekelch Wolde",
//     gender: "Male",
//     country: "Ethiopia",
//     club: "Addis Academy",
//     trainingLocation: "Addis Ababa",
//     altitudeMeters: 2355,
//     image: "/images/img2.jpg",
//     isVerified: true,
//     isFeatured: true,
//     stats: [
//       { event: "Marathon", personalRecord: "2:11:53", isAltitude: false },
//       { event: "10000m", personalRecord: "30:20.10", isAltitude: false }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Zenash Alemayehu",
//     gender: "Female",
//     country: "Ethiopia",
//     club: "Nike Oregon Project (Former)",
//     trainingLocation: "Portland / Sululta",
//     altitudeMeters: 0,
//     image: "/images/img7.png",
//     isVerified: true,
//     isFeatured: false,
//     stats: [
//       { event: "Indoor Mile", personalRecord: "3:47.01", isAltitude: false },
//       { event: "5000m", personalRecord: "12:46.79", isAltitude: false }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Gaddess Bona",
//     gender: "Female",
//     country: "Ethiopia",
//     club: "NN Running Team",
//     trainingLocation: "Mekelle",
//     altitudeMeters: 2200,
//     image: "/images/img3.jpg",
//     isVerified: true,
//     isFeatured: true,
//     stats: [
//       { event: "Half Marathon", personalRecord: "1:02:52", isAltitude: false },
//       { event: "10000m", personalRecord: "29:01.03", isAltitude: false }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Aynalem Kelmu",
//     gender: "Female",
//     country: "Ethiopia",
//     club: "Tirunesh Dibaba",
//     trainingLocation: "Bekoji",
//     altitudeMeters: 2800,
//     image: "/images/img4.jpg",
//     isVerified: false, // Unverified example
//     isFeatured: false,
//     stats: [
//       { event: "5000m", personalRecord: "12:54.83", isAltitude: false },
//       { event: "Cross Country", personalRecord: "28:45", isAltitude: true }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Dawit Taffess",
//     gender: "Male",
//     country: "Ethiopia",
//     club: "Adidas",
//     trainingLocation: "Addis Ababa",
//     altitudeMeters: 2355,
//     image: "/images/img5.jpg",
//     isVerified: true,
//     isFeatured: false,
//     stats: [
//       { event: "1500m", personalRecord: "3:58.09", isAltitude: false },
//       { event: "5000m", personalRecord: "14:25.00", isAltitude: false }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Edris Kamal",
//     gender: "Male",
//     country: "Ethiopia",
//     club: "Unattached", // This will show as a "Free Agent" opportunity!
//     trainingLocation: "Bekoji",
//     altitudeMeters: 2800,
//     image: "/images/img008.jpg",
//     isVerified: true,
//     isFeatured: true,
//     stats: [
//       { event: "Marathon", personalRecord: "2:03:39", isAltitude: false }, // Primary Event
//       { event: "Half Marathon", personalRecord: "59:37", isAltitude: false }
//     ],
//     videoUrl: ""
//   },
//   {
//     name: "Lamecha Turri",
//     gender: "Male",
//     country: "Ethiopia",
//     club: "Nike",
//     trainingLocation: "Addis Ababa",
//     altitudeMeters: 2355,
//     image: "/images/img009.jpg",
//     isVerified: true,
//     isFeatured: false,
//     stats: [
//       { event: "3000m Steeplechase", personalRecord: "7:52.11", isAltitude: false }, // World Record Holder
//       { event: "3000m Indoor", personalRecord: "7:23.81", isAltitude: false }
//     ],
//     videoUrl: ""
//   }
// ];

// // --- THE SEED LOGIC ---
// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("🔌 Connected to DB...");

//     // 1. Clear existing athletes
//     await Athlete.deleteMany({});
//     console.log("🧹 Cleared old athlete data...");

//     // 2. Insert new athletes
//     await Athlete.insertMany(sampleAthletes);
//     console.log("✅ Added 6 new sample athletes!");

//     process.exit();
//   } catch (err) {
//     console.error("❌ Seed Error:", err);
//     process.exit(1);
//   }
// };

// seedDB();


// server/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Athlete = require('./models/Athlete'); 

dotenv.config();

// Define your live website URL here to make it easy to change later
const BASE_URL = "https://runbridge-pro.vercel.app";

// --- THE ROSTER DATA ---
const sampleAthletes = [
  {
    name: "Kiros Desta",
    gender: "Male",
    country: "Ethiopia",
    club: "Sululta Base",
    trainingLocation: "Sululta",
    altitudeMeters: 2500,
    // We combine the Base URL with your image path
    image: `${BASE_URL}/images/img1.jpg`, 
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Marathon", personalRecord: "2:06:15", isAltitude: false },
      { event: "Half Marathon", personalRecord: "59:45", isAltitude: false }
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
    image: `${BASE_URL}/images/img2.jpg`,
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Marathon", personalRecord: "2:11:53", isAltitude: false },
      { event: "10000m", personalRecord: "30:20.10", isAltitude: false }
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
    image: `${BASE_URL}/images/img7.png`,
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "Indoor Mile", personalRecord: "3:47.01", isAltitude: false },
      { event: "5000m", personalRecord: "12:46.79", isAltitude: false }
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
    image: `${BASE_URL}/images/img3.jpg`,
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Half Marathon", personalRecord: "1:02:52", isAltitude: false },
      { event: "10000m", personalRecord: "29:01.03", isAltitude: false }
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
    image: `${BASE_URL}/images/img4.jpg`,
    isVerified: false, 
    isFeatured: false,
    stats: [
      { event: "5000m", personalRecord: "12:54.83", isAltitude: false },
      { event: "Cross Country", personalRecord: "28:45", isAltitude: true }
    ],
    videoUrl: ""
  },
  {
    name: "Dawit Taffess",
    gender: "Female",
    country: "Ethiopia",
    club: "Adidas",
    trainingLocation: "Addis Ababa",
    altitudeMeters: 2355,
    image: `${BASE_URL}/images/img5.jpg`,
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "1500m", personalRecord: "3:58.09", isAltitude: false },
      { event: "5000m", personalRecord: "14:25.00", isAltitude: false }
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
    image: `${BASE_URL}/images/img008.jpg`,
    isVerified: true,
    isFeatured: true,
    stats: [
      { event: "Marathon", personalRecord: "2:03:39", isAltitude: false }, 
      { event: "Half Marathon", personalRecord: "59:37", isAltitude: false }
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
    image: `${BASE_URL}/images/img009.jpg`,
    isVerified: true,
    isFeatured: false,
    stats: [
      { event: "3000m Steeplechase", personalRecord: "7:52.11", isAltitude: false }, 
      { event: "3000m Indoor", personalRecord: "7:23.81", isAltitude: false }
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
    console.log("✅ Added your custom athletes with Vercel links!");

    process.exit();
  } catch (err) {
    console.error("❌ Seed Error:", err);
    process.exit(1);
  }
};

seedDB();