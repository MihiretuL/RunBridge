import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../api'; // Import at the top

const Contact = () => {
  const [searchParams] = useSearchParams();
  
  // Logic: Get query params (e.g., ?athlete=Birhanu+Legese)
  const initialReason = searchParams.get('reason') || 'General';
  const initialContext = searchParams.get('athlete') || null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: initialReason,
    message: '',
    inquiryContext: initialContext || 'General Inquiry',
  });
  
  const [status, setStatus] = useState({ message: null, type: null }); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form if URL params change
  useEffect(() => {
    if (initialContext) {
      setFormData(prev => ({ 
        ...prev, 
        inquiryContext: `Inquiry regarding athlete: ${initialContext}` 
      }));
    }
  }, [initialContext]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: null, type: null });

    try {
      await axios.post(`${API_URL}/contact`, formData);
      setStatus({ 
        message: "Message sent! Our scouting team will respond within 24 hours.", 
        type: 'success' 
      });
      // Reset form on success
      setFormData({ name: '', email: '', reason: 'General', message: '', inquiryContext: '' });
    } catch (err) {
      console.error(err);
      setStatus({ 
        message: "Failed to send. Please try again or email us directly.", 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Partner with <span className="text-blue-500">Performance</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you are a club scout, a global brand, or an elite athlete we are ready to connect.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* 2. LEFT COLUMN: Contact Info & Value Props */}
          <div className="bg-blue-600 lg:w-2/5 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              {/* --- UPDATED LIST START --- */}
              <ul className="space-y-6">
                
                {/* 1. Global HQ (Chicago) */}
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Global Headquarters</p>
                    <p className="text-blue-100">
                      Chicago, IL<br/>
                      United States
                    </p>
                  </div>
                </li>

                {/* 2. Regional Operations (Asella) */}
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                    <span className="text-2xl">🇪🇹</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Regional Operations</p>
                    <p className="text-blue-100">
                      Asella, Arsi Zone<br/>
                      Ethiopia
                    </p>
                  </div>
                </li>

                {/* 3. Email / Scouting */}
                <li className="flex items-start gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Scouting Department</p>
                    <p className="text-blue-100 break-all">scouting@runbridgepro.com</p>
                  </div>
                </li>

              </ul>
              {/* --- UPDATED LIST END --- */}

            </div>

            <div className="mt-12">
              <h4 className="font-bold text-lg mb-2">For Sponsors</h4>
              <p className="text-blue-100 text-sm mb-6">
                We provide verified data and direct access to athletes for brand campaigns.
              </p>
              <h4 className="font-bold text-lg mb-2">For Clubs</h4>
              <p className="text-blue-100 text-sm">
                Streamlined contract negotiations and trial arrangements for European and Asian clubs.
              </p>
            </div>
          </div>

          {/* 3. RIGHT COLUMN: The Form */}
          <div className="lg:w-3/5 p-10 bg-gray-50">
            {initialContext && (
               <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-800 text-sm flex items-center justify-between">
                 <span>Running inquiry for: <strong>{initialContext}</strong></span>
               </div>
            )}

            {status.message && (
              <div className={`mb-6 p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required 
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required 
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Contact</label>
                <select name="reason" value={formData.reason} onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 bg-white"
                >
                  <option value="General">General Inquiry</option>
                  <option value="scouting">Scouting / Club Trial</option>
                  <option value="sponsorship">Brand Sponsorship</option>
                  <option value="media">Media / Interview Request</option>
                  <option value="representation">Request Representation (Athletes)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required
                  placeholder="Tell us more about your club, brand, or goals..."
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;