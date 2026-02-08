import React from 'react';

const CookieSettings = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-200 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Cookie Settings</h1>
        <p className="text-gray-700 mb-8">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
          Currently, our platform uses only essential cookies required for functionality (like login sessions).
        </p>
        <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm inline-block">
          <strong>Note:</strong> Advanced cookie management controls will be available in a future update.
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;