// frontend/src/pages/Contact.jsx

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contact'; 

const Contact = () => {
  const [searchParams] = useSearchParams();
  
  const initialReason = searchParams.get('reason') || 'General';
  const initialContext = searchParams.get('athleteName') || 'General Inquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: initialReason,
    message: '',
    inquiryContext: initialContext,
  });
  
  const [status, setStatus] = useState({ message: null, type: null }); 
  const [isSubmitting, setIsSubmitting] = useState(false); // Controls spinner/disable state

  useEffect(() => {
    setFormData(prev => ({ 
      ...prev, 
      reason: initialReason,
      inquiryContext: initialContext 
    }));
  }, [initialReason, initialContext]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: null, type: null });

    try {
      const response = await axios.post(API_URL, formData);
      
      setStatus({ 
        message: response.data.msg, 
        type: 'success' 
      });
      
      if (initialReason === 'General') {
        setFormData({ name: '', email: '', reason: 'General', message: '', inquiryContext: 'General Inquiry' });
      } else {
        setFormData(prev => ({ ...prev, message: '' }));
      }

    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({ 
        message: err.response?.data?.msg || 'Failed to send message. Please try again later.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusStyle = status.type === 'success' 
    ? "bg-green-100 border-l-4 border-green-500 text-green-700 p-4" 
    : "bg-red-100 border-l-4 border-red-500 text-red-700 p-4";


  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-runbridge-blue sm:text-5xl">
          Contact RunBridge
        </h1>
        <p className="mt-3 text-xl text-gray-500">
          Let's connect. Tell us how we can help you achieve your next goal.
        </p>
      </div>

      <div className="mt-12 p-8 bg-white shadow-xl rounded-lg">
        
        {/* Context Alert */}
        {initialContext !== 'General Inquiry' && (
           <div className="mb-6 p-4 bg-accent-blue/10 border-l-4 border-accent-blue text-runbridge-blue rounded-md">
              <p className="font-semibold">Inquiry Context: {initialContext}</p>
              <p className="text-sm">We've pre-selected the reason for your convenience.</p>
           </div>
        )}
        
        {/* Submission Status Message */}
        {status.message && (
          <div className={`${statusStyle} mb-6 transition duration-300`}>
            <p>{status.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField 
              label="Full Name" name="name" type="text" 
              value={formData.name} onChange={handleChange} required
            />
            <InputField 
              label="Email Address" name="email" type="email" 
              value={formData.email} onChange={handleChange} required
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              disabled={initialReason !== 'General'} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-accent-blue focus:border-accent-blue text-gray-900 bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              <option value="General">General Inquiry</option>
              <option value="Brand">Brand Partnership</option>
              <option value="Media">Media Inquiry</option>
              <option value="Athlete">Athlete Representation</option>
            </select>
            {initialReason !== 'General' && <p className="text-xs text-gray-500 mt-1">Locked by context.</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message / Proposal
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Detail your request..."
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-accent-blue focus:border-accent-blue"
            />
          </div>

          {/* Submit Button with Spinner */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-runbridge-blue hover:bg-accent-blue transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, name, type, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-accent-blue focus:border-accent-blue"
    />
  </div>
);

export default Contact;
