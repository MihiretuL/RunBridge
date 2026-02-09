import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api';

const AddAthleteForm = ({ onSuccess }) => {
  // 1. Setup State for ALL fields matching seed.js
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    country: 'Ethiopia',
    club: 'Unattached',
    trainingLocation: 'Sululta',
    altitudeMeters: 2500,
    image: '',
    videoUrl: '',
    bio: '',
    isVerified: false,
    isFeatured: false,
    // We will capture stats as flat fields here, then format them into an array before sending
    primaryEvent: '',
    primaryTime: '',
    secondaryEvent: '',
    secondaryTime: ''
  });
  
  const [status, setStatus] = useState({ msg: '', type: '' });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ msg: 'Saving Athlete...', type: 'info' });

    try {
      // 2. Format the data to match the Database Schema perfectly
      const finalData = {
        name: formData.name,
        gender: formData.gender,
        country: formData.country,
        club: formData.club,
        trainingLocation: formData.trainingLocation,
        altitudeMeters: Number(formData.altitudeMeters),
        image: formData.image,
        videoUrl: formData.videoUrl,
        bio: formData.bio,
        isVerified: formData.isVerified,
        isFeatured: formData.isFeatured,
        // Construct the stats array dynamically
        stats: []
      };

      // Add Primary Event if filled
      if (formData.primaryEvent && formData.primaryTime) {
        finalData.stats.push({
          event: formData.primaryEvent,
          personalRecord: formData.primaryTime,
          isAltitude: Number(formData.altitudeMeters) > 2000 // Auto-tag altitude if high elevation
        });
      }

      // Add Secondary Event if filled
      if (formData.secondaryEvent && formData.secondaryTime) {
        finalData.stats.push({
          event: formData.secondaryEvent,
          personalRecord: formData.secondaryTime,
          isAltitude: false
        });
      }

      // 3. Send to Backend
      // Note: If you added auth middleware, add headers here. For MVP, we likely kept it open.
      await axios.post(`${API_URL}/athletes`, finalData);
      
      setStatus({ msg: 'Success! Athlete added to roster.', type: 'success' });
      
      // Reset Form
      setFormData({
        name: '', gender: 'Male', country: 'Ethiopia', club: 'Unattached',
        trainingLocation: 'Sululta', altitudeMeters: 2500, image: '', videoUrl: '', bio: '',
        isVerified: false, isFeatured: false,
        primaryEvent: '', primaryTime: '', secondaryEvent: '', secondaryTime: ''
      });

      if(onSuccess) onSuccess(); // Refresh parent list

    } catch (err) {
      console.error(err);
      setStatus({ msg: 'Error saving athlete. Check console.', type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Status Message */}
      {status.msg && (
        <div className={`p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
          {status.msg}
        </div>
      )}

      {/* SECTION 1: Basic Identity */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold text-gray-700 mb-3 uppercase text-xs tracking-wider">Identity</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700">Club / Sponsor</label>
             <input type="text" name="club" value={formData.club} onChange={handleChange} placeholder="e.g. Unattached"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700">Country</label>
             <input type="text" name="country" value={formData.country} onChange={handleChange} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
      </div>

      {/* SECTION 2: Location & Altitude */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold text-gray-700 mb-3 uppercase text-xs tracking-wider">Training Base</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location (City)</label>
            <input type="text" name="trainingLocation" value={formData.trainingLocation} onChange={handleChange} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Altitude (Meters)</label>
            <input type="number" name="altitudeMeters" value={formData.altitudeMeters} onChange={handleChange} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
      </div>

      {/* SECTION 3: Performance Stats (The "Beef") */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-3 uppercase text-xs tracking-wider">Performance Stats</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
             <label className="block text-sm font-medium text-blue-900">Primary Event</label>
             <input type="text" name="primaryEvent" placeholder="e.g. Marathon" value={formData.primaryEvent} onChange={handleChange} 
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
             <label className="block text-sm font-medium text-blue-900">Personal Best (Time)</label>
             <input type="text" name="primaryTime" placeholder="e.g. 2:03:00" value={formData.primaryTime} onChange={handleChange} 
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm p-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
             <label className="block text-sm font-medium text-blue-900">Secondary Event (Optional)</label>
             <input type="text" name="secondaryEvent" placeholder="e.g. Half Marathon" value={formData.secondaryEvent} onChange={handleChange} 
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
             <label className="block text-sm font-medium text-blue-900">Secondary PB (Optional)</label>
             <input type="text" name="secondaryTime" placeholder="e.g. 59:30" value={formData.secondaryTime} onChange={handleChange} 
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
      </div>

      {/* SECTION 4: Media & Bio */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold text-gray-700 mb-3 uppercase text-xs tracking-wider">Media & Profile</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://..."
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            <p className="text-xs text-gray-500 mt-1">Tip: Use Unsplash or your own hosted image link.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">YouTube Video URL</label>
            <input type="text" name="videoUrl" value={formData.videoUrl} onChange={handleChange} placeholder="https://youtube.com/watch?v=..."
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Short Bio</label>
            <textarea name="bio" rows="3" value={formData.bio} onChange={handleChange} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
        </div>
      </div>

      {/* SECTION 5: Admin Flags */}
      <div className="flex gap-6 pt-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" name="isVerified" checked={formData.isVerified} onChange={handleChange} 
            className="rounded text-blue-600 focus:ring-blue-500 h-5 w-5" />
          <span className="text-sm font-bold text-gray-700">Mark as Verified Elite?</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} 
            className="rounded text-blue-600 focus:ring-blue-500 h-5 w-5" />
          <span className="text-sm font-bold text-gray-700">Feature on Homepage?</span>
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" 
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-black focus:outline-none transition-all"
      >
        + Add Athlete to Roster
      </button>

    </form>
  );
};

export default AddAthleteForm;


