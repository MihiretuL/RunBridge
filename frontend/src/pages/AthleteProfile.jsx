// frontend/src/pages/AthleteProfile.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/athletes'; 

const AthleteProfile = () => {
  const { id } = useParams(); // Get the ID from the URL: /athletes/:id
  const [athlete, setAthlete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAthlete = async () => {
      try {
        // Dynamic API Call: Fetch detailed info for the specific athlete ID
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        setAthlete(response.data);
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching athlete ${id}:`, err);
        setError("Athlete profile not found or server error.");
        setLoading(false);
      }
    };
    fetchAthlete();
  }, [id]); // Re-run effect if the ID in the URL changes

  // --- RENDERING LOGIC ---
  if (loading) {
    return <div className="text-center py-20 text-xl text-runbridge-blue">Loading Athlete Details...</div>;
  }

  if (error || !athlete) {
    return <div className="text-center py-20 text-xl text-red-600">Error: {error}</div>;
  }
  
  // Destructure athlete data for cleaner rendering
  const { name, sport, country, bio, image, stats } = athlete;

  return (
    <div className="bg-bg-light">
      {/* 1. Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        {/* Large hero image */}
        <img
          src={`https://via.placeholder.com/1200x600?text=Profile+of+${name.replace(/\s/g, '+')}`}
          alt={`Hero shot of ${name}`}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-runbridge-blue/70 to-transparent"></div>
        
        {/* Profile Header Overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            {name}
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mt-2">{sport} | {country}</p>
        </div>
      </div>

      {/* 2. Main Content & Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Bio & Video */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-runbridge-blue mb-4 border-b-2 border-accent-blue pb-2">Biography</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {bio || "Detailed biography coming soon. Known for dedication and incredible resilience in major championships."}
          </p>
          
          {/* Placeholder for Video Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-runbridge-blue mb-3">Highlight Reel</h3>
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Video Player Placeholder</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stats, Endorsements & CTA */}
        <aside className="lg:col-span-1 space-y-8">
          
          {/* Stats Section: PRs, Medals */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-accent-blue">
            <h3 className="text-2xl font-bold text-runbridge-blue mb-4">Key Performance Records</h3>
            {stats && stats.length > 0 ? (
              <ul className="space-y-3">
                {stats.map((stat, index) => (
                  <li key={index} className="flex justify-between border-b pb-1">
                    <span className="font-medium text-gray-600">{stat.event}:</span>
                    <span className="font-bold text-runbridge-blue">{stat.personalRecord}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No specific stats available yet.</p>
            )}
          </div>
          
          {/* Endorsements/Sponsorships Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-runbridge-blue mb-3">Endorsements</h3>
            <div className="flex flex-wrap gap-4 text-gray-500">
              <span className="px-3 py-1 bg-gray-100 rounded text-sm">Nike</span>
              <span className="px-3 py-1 bg-gray-100 rounded text-sm">Gatorade</span>
              <span className="px-3 py-1 bg-gray-100 rounded text-sm">Future Brand</span>
            </div>
          </div>

          {/* Contact CTA Button (Request Representation) */}
          <Link
            to="/contact?athleteName=Requesting+Representation" // Pass a query param for context
            className="w-full block text-center py-4 border-4 border-transparent text-lg font-bold rounded-lg text-white bg-accent-blue hover:bg-runbridge-blue transition duration-300 shadow-xl transform hover:scale-[1.02]"
          >
            Request to Work With {name.split(' ')[0]}
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default AthleteProfile;