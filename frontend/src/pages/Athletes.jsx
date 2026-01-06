// // frontend/src/pages/Athletes.jsx

// import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import AthleteCard from '../components/AthleteCard.jsx'; // Ensure .jsx extension here too

// // Define the API base URL. Use the port defined in backend/.env
// const API_URL = 'http://localhost:5000/api/athletes'; 

// const Athletes = () => {
//   const [allAthletes, setAllAthletes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterTerm, setFilterTerm] = useState(''); // State for the search term

//   useEffect(() => {
//     const fetchAthletes = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setAllAthletes(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching athletes:", err);
//         setError("Failed to load athlete data. Please check the backend server.");
//         setLoading(false);
//       }
//     };
//     fetchAthletes();
//   }, []); 

//   // --- Filtering Logic (Use useMemo for performance) ---
//   const filteredAthletes = useMemo(() => {
//     if (!filterTerm) {
//       return allAthletes;
//     }
//     const lowerCaseTerm = filterTerm.toLowerCase();
    
//     return allAthletes.filter(athlete => 
//       // Filter by name or sport
//       athlete.name.toLowerCase().includes(lowerCaseTerm) ||
//       athlete.sport.toLowerCase().includes(lowerCaseTerm) ||
//       athlete.country.toLowerCase().includes(lowerCaseTerm)
//     );
//   }, [allAthletes, filterTerm]); // Recalculate only when athletes or filterTerm changes

//   // --- RENDERING LOGIC ---
//   if (loading) {
//     return (
//       <div className="text-center py-16 text-xl text-runbridge-blue">
//         Loading Elite Roster...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-16 text-xl text-red-600">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       {/* Page Header and Title */}
//       <h1 className="text-4xl font-extrabold text-runbridge-blue tracking-tight sm:text-5xl mb-4">
//         Elite Athlete Directory
//       </h1>
//       <p className="text-xl text-gray-500 mb-10">
//         Connecting the world's most driven runners with leading global brands. ({allAthletes.length} Total Athletes)
//       </p>

//       {/* Filter Bar (Task 5 Implementation) */}
//       <div className="mb-10 p-5 bg-bg-light rounded-xl shadow-inner border border-gray-200">
//         <label htmlFor="search" className="block text-lg font-medium text-runbridge-blue mb-2">
//           Find Your Talent
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             id="search"
//             value={filterTerm}
//             onChange={(e) => setFilterTerm(e.target.value)}
//             placeholder="Search by name, sport, or country..."
//             className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-accent-blue focus:border-accent-blue transition duration-200"
//           />
//           <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//         </div>
//         {filterTerm && (
//             <p className="text-sm text-gray-600 mt-2">
//                 Showing {filteredAthletes.length} results for: <span className="font-semibold text-runbridge-blue">"{filterTerm}"</span>
//             </p>
//         )}
//       </div>

//       {/* Grid Layout of Athlete Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {filteredAthletes.length > 0 ? (
//           filteredAthletes.map(athlete => (
//             // Render the filtered list
//             <AthleteCard key={athlete._id} athlete={athlete} />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-xl text-gray-500">
//             {filterTerm ? `No athletes match the search term "${filterTerm}".` : 'No athletes found in the database.'}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Athletes;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AthleteCard from '../components/AthleteCard';

const Athletes = () => {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEvent, setFilterEvent] = useState('All');

  // Fetch all athletes on mount
  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/athletes');
        setAthletes(response.data);
      } catch (err) {
        console.error("Error fetching athletes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAthletes();
  }, []);

  // --- FILTER LOGIC ---
  const filteredAthletes = athletes.filter(athlete => {
    // 1. Search by Name or Club (Case insensitive)
    const matchesSearch = 
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (athlete.club && athlete.club.toLowerCase().includes(searchTerm.toLowerCase()));

    // 2. Filter by Event (Simple check if the event string exists in their stats)
    // Note: This is a simple implementation. For production, you might want more robust tag filtering.
    const matchesEvent = filterEvent === 'All' 
      ? true 
      : athlete.stats.some(stat => stat.event.includes(filterEvent));

    return matchesSearch && matchesEvent;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Elite Talent Roster</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our database of verified East African endurance athletes. 
            Filter by discipline to find your next champion.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-30">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              type="text"
              placeholder="Search by name or club..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Event Filter Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Discipline:</span>
            <select
              value={filterEvent}
              onChange={(e) => setFilterEvent(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
            >
              <option value="All">All Events</option>
              <option value="5000m">5000m</option>
              <option value="10000m">10000m</option>
              <option value="Marathon">Marathon</option>
              <option value="Half Marathon">Half Marathon</option>
              <option value="Cross Country">Cross Country</option>
            </select>
          </div>
        </div>

        {/* ATHLETE GRID */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-500">Loading roster...</p>
          </div>
        ) : filteredAthletes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAthletes.map(athlete => (
              <AthleteCard key={athlete._id} athlete={athlete} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No athletes found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setFilterEvent('All');}}
              className="mt-6 font-medium text-blue-600 hover:text-blue-500"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Athletes;