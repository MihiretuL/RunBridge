// frontend/src/components/AthleteCard.jsx
import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  // 1. Logic: Use athlete's image if available, otherwise use placeholder logic
  const imageUrl = athlete.image && athlete.image !== 'placeholder.jpg' 
    ? athlete.image 
    : `https://placehold.co/400x400/2c3e50/FFF?text=${athlete.name.split(' ')[0]}+Run`;

  // 2. Default to Ethiopia
  const countryCode = athlete.countryCode || 'ET'; 
  const countryName = athlete.country || 'Ethiopia';
  
  // 3. Stats logic
  const mainEvent = athlete.stats && athlete.stats[0] 
    ? athlete.stats[0] 
    : { event: 'Long Distance', personalRecord: 'TBD' };

  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full">
      
      {/* --- Image Section --- */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={athlete.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.src = 'https://placehold.co/400x400?text=No+Image'; }}
        />
        
        {/* Verification Badge */}
        {athlete.isVerified && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center shadow-md">
            Verified Talent
          </div>
        )}

        {/* Ethiopian Flag */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <span>🇪🇹</span> {countryName}
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Name & Club */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
            {athlete.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {athlete.club || "Taruna Stivava Academy"} • {athlete.trainingLocation || "Sululta, Ethiopia"}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <p className="text-gray-400 text-[10px] uppercase tracking-wide">Primary Event</p>
            <p className="font-bold text-gray-800">{mainEvent.event}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-100">
            <p className="text-gray-400 text-[10px] uppercase tracking-wide">Personal Best</p>
            <p className="font-bold text-blue-600">{mainEvent.personalRecord}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Link 
            to={`/athletes/${athlete._id}`} 
            className="block w-full text-center py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            View Scout Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AthleteCard;