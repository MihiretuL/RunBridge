// frontend/src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AthleteCard from '../components/AthleteCard.jsx'; // FIX: Added .jsx extension

const FEATURED_API_URL = 'http://localhost:5000/api/athletes/featured';

const Home = () => {
  const [featuredAthletes, setFeaturedAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await axios.get(FEATURED_API_URL);
        setFeaturedAthletes(response.data);
      } catch (err) {
        console.error("Error fetching featured athletes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div>
      {/* 1. Full-width Hero Banner (The dramatic, layered look) */}
      <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        
        {/* Base Dark Blue Background */}
        <div className="absolute inset-0 bg-runbridge-blue"></div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-runbridge-blue via-gray-900/50 to-accent-blue/50 opacity-90"></div>
        
        {/* Runner Silhouette (Placeholder Image with low opacity for texture) */}
        <div 
             className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm scale-110" 
             style={{ backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Abstract+Running+Lines')`, 
                      backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-snug mb-4 tracking-tighter shadow-text-md">
            Connecting Elite Runners <br className="hidden sm:block" /> with World-Class Brands.
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
            The digital home of peak performance management and strategic partnerships.
          </p>
          <Link
            to="/athletes"
            className="px-8 py-4 text-lg font-bold rounded-full text-runbridge-blue bg-white transition duration-300 shadow-2xl hover:bg-gray-200 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Meet Our Athletes</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </div>

      {/* 2. Featured Athletes Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-runbridge-blue text-center mb-10">
          Featured Talent
        </h2>

        {loading ? (
          <div className="text-center text-gray-500">Loading featured roster...</div>
        ) : featuredAthletes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAthletes.slice(0, 3).map(athlete => (
              <AthleteCard key={athlete._id} athlete={athlete} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No featured athletes currently available.</div>
        )}

        {/* Call to Action to full directory */}
        <div className="text-center mt-12">
          <Link
            to="/athletes"
            className="text-lg text-accent-blue hover:text-runbridge-blue font-semibold border-b-2 border-accent-blue hover:border-runbridge-blue pb-1 transition duration-300"
          >
            View Full Athlete Directory →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
