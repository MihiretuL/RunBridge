// frontend/src/pages/AthleteProfile.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const AthleteProfile = () => {
  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // SIMULATED FETCH for MVP (If API fails, it falls back to this dummy data)
    // In production, remove the fallback and just use the axios call.
    const fetchAthlete = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/athletes/${id}`);
        setAthlete(res.data);
      } catch (err) {
        console.warn("API not connected yet, loading PLACEHOLDER data for demo.");
        setAthlete({
            name: "Gaddisa Tolla ",
            country: "Ethiopia",
            club: "Taruna Stivava",
            trainingLocation: "Sululta",
            altitudeMeters: 2500,
            isVerified: true,
            image: "/images/img1.jpg",
            bio: "One of the most promising talents coming out of the Taruna Stivava training camp. Specialized in 5000m and 10000m, demonstrating exceptional endurance at high altitude.",
            videos: [], // Intentionally empty to test the placeholder video logic below
            stats: [
                { event: "5000m", personalRecord: "13:15.02", date: "2024-03-10", isAltitude: true },
                { event: "10000m", personalRecord: "27:40.50", date: "2024-05-15", isAltitude: false }
            ]
        });
      } finally {
        setLoading(false);
      }
    };
    fetchAthlete();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-500">Loading Athlete Profile...</div>;
  if (!athlete) return <div className="text-center py-20 text-red-500">Athlete not found.</div>;

  // --- PLACEHOLDER LOGIC ---
  // If no real videos exist, create a dummy one for the layout
  const displayVideos = athlete.videos && athlete.videos.length > 0 
    ? athlete.videos 
    : [{ title: "Training Session: Sululta Track (Sample)", isPlaceholder: true }];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. HERO HEADER */}
      <div className="relative bg-gray-900 h-80 lg:h-96">
        <img 
          src={athlete.image || "/images/img1.jpg"} 
          className="w-full h-full object-cover opacity-50" 
          alt="Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        
        <div className="absolute bottom-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {athlete.isVerified && (
                 <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-flex items-center gap-1">
                   ✓ Verified Elite
                 </span>
              )}
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{athlete.name}</h1>
              <p className="text-xl text-gray-300 mt-1 flex items-center gap-2">
                🇪🇹 {athlete.country} 
                <span className="text-gray-500">|</span> 
                {athlete.club}
              </p>
            </div>
            
            {/* Altitude Badge - Crucial for Ethiopian Context */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg text-white">
              <p className="text-xs text-gray-400 uppercase">Home Base</p>
              <p className="font-bold">{athlete.trainingLocation || "Addis Ababa"}</p>
              <p className="text-sm text-yellow-400 font-mono">⛰ {athlete.altitudeMeters || 2500}m Elev.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. LEFT COLUMN (Info & Video) */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Athlete Bio</h2>
            <p className="text-gray-600 leading-relaxed">
              {athlete.bio}
            </p>
          </div>

          {/* Video Section with Placeholders */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>🎥</span> Race & Training Footage
            </h2>
            
            <div className="grid gap-6">
              {displayVideos.map((video, idx) => (
                <div key={idx} className="bg-black rounded-lg overflow-hidden relative group">
                  {video.isPlaceholder ? (
                    // PLACEHOLDER VIDEO UI
                    <div className="w-full h-64 md:h-80 bg-gray-800 flex flex-col items-center justify-center relative cursor-pointer">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                        <p className="text-gray-400 font-medium">Sample Footage (Placeholder)</p>
                        <p className="text-gray-600 text-sm mt-1">Video content will appear here</p>
                    </div>
                  ) : (
                    // REAL VIDEO UI
                    <>
                    <iframe 
                      src={video.url.replace("watch?v=", "embed/")} 
                      title={video.title}
                      className="w-full h-64 md:h-80"
                      allowFullScreen
                    ></iframe>
                    </>
                  )}
                  <div className="bg-gray-900 p-3">
                    <p className="text-sm font-semibold text-white">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. RIGHT COLUMN (Stats & Contact) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Stats Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">Personal Bests</h3>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded">Official</span>
            </div>
            <div className="divide-y divide-gray-100">
              {athlete.stats && athlete.stats.map((stat, idx) => (
                <div key={idx} className="p-4 flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <p className="font-bold text-gray-900">{stat.event}</p>
                    <p className="text-xs text-gray-500">{new Date(stat.date).getFullYear()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600 font-mono">{stat.personalRecord}</p>
                    {stat.isAltitude && (
                        <div className="flex items-center justify-end gap-1 text-[10px] text-yellow-600 mt-1">
                             <span>⚠️ Altitude</span>
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-green-700 rounded-xl shadow-lg p-6 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Scout this Athlete</h3>
            <p className="text-green-100 text-sm mb-6">
              Contact RunBridge Pro for verified times, full race history, and contract availability.
            </p>
            <Link 
              to={`/contact?athlete=${athlete.name}`} 
              className="block w-full bg-white text-green-800 font-bold py-3 rounded-lg hover:bg-green-50 transition-colors shadow-md"
            >
              Request Connection
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AthleteProfile;