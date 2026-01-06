// frontend/src/pages/Athletes.jsx

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import AthleteCard from '../components/AthleteCard.jsx'; // Ensure .jsx extension here too

// Define the API base URL. Use the port defined in backend/.env
const API_URL = 'http://localhost:5000/api/athletes'; 

const Athletes = () => {
  const [allAthletes, setAllAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterTerm, setFilterTerm] = useState(''); // State for the search term

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await axios.get(API_URL);
        setAllAthletes(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching athletes:", err);
        setError("Failed to load athlete data. Please check the backend server.");
        setLoading(false);
      }
    };
    fetchAthletes();
  }, []); 

  // --- Filtering Logic (Use useMemo for performance) ---
  const filteredAthletes = useMemo(() => {
    if (!filterTerm) {
      return allAthletes;
    }
    const lowerCaseTerm = filterTerm.toLowerCase();
    
    return allAthletes.filter(athlete => 
      // Filter by name or sport
      athlete.name.toLowerCase().includes(lowerCaseTerm) ||
      athlete.sport.toLowerCase().includes(lowerCaseTerm) ||
      athlete.country.toLowerCase().includes(lowerCaseTerm)
    );
  }, [allAthletes, filterTerm]); // Recalculate only when athletes or filterTerm changes

  // --- RENDERING LOGIC ---
  if (loading) {
    return (
      <div className="text-center py-16 text-xl text-runbridge-blue">
        Loading Elite Roster...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header and Title */}
      <h1 className="text-4xl font-extrabold text-runbridge-blue tracking-tight sm:text-5xl mb-4">
        Elite Athlete Directory
      </h1>
      <p className="text-xl text-gray-500 mb-10">
        Connecting the world's most driven runners with leading global brands. ({allAthletes.length} Total Athletes)
      </p>

      {/* Filter Bar (Task 5 Implementation) */}
      <div className="mb-10 p-5 bg-bg-light rounded-xl shadow-inner border border-gray-200">
        <label htmlFor="search" className="block text-lg font-medium text-runbridge-blue mb-2">
          Find Your Talent
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            placeholder="Search by name, sport, or country..."
            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-accent-blue focus:border-accent-blue transition duration-200"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        {filterTerm && (
            <p className="text-sm text-gray-600 mt-2">
                Showing {filteredAthletes.length} results for: <span className="font-semibold text-runbridge-blue">"{filterTerm}"</span>
            </p>
        )}
      </div>

      {/* Grid Layout of Athlete Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredAthletes.length > 0 ? (
          filteredAthletes.map(athlete => (
            // Render the filtered list
            <AthleteCard key={athlete._id} athlete={athlete} />
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-500">
            {filterTerm ? `No athletes match the search term "${filterTerm}".` : 'No athletes found in the database.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default Athletes;
