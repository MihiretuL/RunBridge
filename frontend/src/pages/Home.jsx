

// frontend/src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AthleteCard from '../components/AthleteCard.jsx';

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
      {/* =========================================
          1. HERO SECTION (Upgraded Visuals)
      ========================================= */}
      <div className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        
        {/* A. Background Image (Uses your local startup.jpeg or a runner image) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
          style={{ 
            backgroundImage: `url('/images/hero.jpg')`, // <--- Uses your real image!
          }}
        ></div>
        
        {/* B. Dark Overlay (Makes text pop) */}
        <div className="absolute inset-0 bg-gray-900/70 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/90"></div>

        {/* C. Hero Content */}
        <div className="relative z-10 p-6 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-500 text-blue-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            ETHIOPIA • KENYA • UGANDA
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
            Unearthing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Elite Endurance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Direct access to verified, altitude-trained talent from the heart of East Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/athletes"
              className="px-10 py-4 text-lg font-bold rounded-full text-gray-900 bg-white hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Scout Talent
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 text-lg font-bold rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          2. THE "WHY US" SECTION (The Pitch)
      ========================================= */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-widest">The RunBridge Standard</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We don't just list runners. We verify performance, context, and potential.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1: Verification */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Times</h3>
              <p className="text-gray-600 leading-relaxed">Every Personal Best is cross-referenced with official race results and federation data.</p>
            </div>

            {/* Feature 2: Altitude Context */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Altitude Context</h3>
              <p className="text-gray-600 leading-relaxed">We provide altitude-adjusted performance metrics for athletes training above 2,500m.</p>
            </div>

            {/* Feature 3: Direct Connection */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Club Access</h3>
              <p className="text-gray-600 leading-relaxed">Direct lines to training camps like Taruna Stivava, bypassing reliable middlemen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          3. FEATURED ATHLETES (The Product)
      ========================================= */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Featured Talent</h2>
            <p className="mt-2 text-gray-500">Scouted prospects ready for international competition.</p>
          </div>
          <Link to="/athletes" className="hidden md:inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors">
            View All Athletes <span className="ml-2">→</span>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : featuredAthletes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAthletes.slice(0, 3).map(athlete => (
              <AthleteCard key={athlete._id} athlete={athlete} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Featured roster is currently being updated.</p>
          </div>
        )}

        {/* Mobile "View All" Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/athletes"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-bold rounded-lg"
          >
            View Full Directory
          </Link>
        </div>
      </div>

    {/* =========================================
          4. TRUST/PARTNER STRIP (High Contrast)
      ========================================= */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Trusted Sourcing Partners
          </p>
          
          {/* Flex container for logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
             
             {/* Partner 1 */}
             <div className="group cursor-pointer">
               <span className="text-2xl md:text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                 TIRUNESH DIBABA CLUB
               </span>
             </div>

             {/* Partner 2 */}
             <div className="group cursor-pointer">
               <span className="text-2xl md:text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                 SULULTA BASE
               </span>
             </div>

             {/* Partner 3 */}
             <div className="group cursor-pointer">
               <span className="text-2xl md:text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                 ADDIS ACADEMY
               </span>
             </div>

          </div>
        </div>
      </div>
      

    </div>
  );
};

export default Home;