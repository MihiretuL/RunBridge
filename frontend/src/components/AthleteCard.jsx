// frontend/src/components/AthleteCard.jsx

import { Link } from 'react-router-dom';

const AthleteCard = ({ athlete }) => {
  const flagPlaceholder = athlete.countryCode ? `[${athlete.countryCode}]` : '🌍';

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      
      {/* Professional Photo */}
      <div className="relative h-64 w-full">
        {/* In a real app, this would be an actual image, e.g., src={athlete.image} */}
        <img
          src={`https://via.placeholder.com/400x400?text=${athlete.name.replace(/\s/g, '+')}`}
          alt={`Photo of ${athlete.name}`}
          className="w-full h-full object-cover"
        />
        {/* Country Flag Overlay */}
        <div className="absolute top-3 right-3 bg-runbridge-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {flagPlaceholder} {athlete.country}
        </div>
      </div>

      <div className="p-5">
        
        {/* Name and Sport */}
        <h3 className="text-2xl font-bold text-runbridge-blue mb-1">
          {athlete.name}
        </h3>
        <p className="text-md text-gray-500 mb-4 uppercase tracking-wider">
          {athlete.sport}
        </p>

        {/* Key Achievement/Stats */}
        <div className="text-sm text-gray-700 space-y-2 mb-4">
          <p>
            <span className="font-semibold">PR:</span> {athlete.stats[0]?.personalRecord || 'N/A'}
          </p>
          <p>
            <span className="font-semibold">Event:</span> {athlete.stats[0]?.event || 'N/A'}
          </p>
        </div>

        {/* View Profile Button (Polished) */}
        <Link 
          to={`/athletes/${athlete._id}`} 
          className="block w-full text-center py-2 border-2 border-runbridge-blue text-runbridge-blue font-medium rounded-lg transition duration-300 hover:bg-runbridge-blue hover:text-white hover:shadow-md transform hover:scale-[1.02]"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default AthleteCard;
