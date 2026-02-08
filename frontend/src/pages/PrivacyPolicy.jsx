import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              RunBridge Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our websites and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, and contact details provided via forms.</li>
              <li><strong>Usage Data:</strong> Information on how you interact with our platform (e.g., pages visited, time spent).</li>
              <li><strong>Athlete Data:</strong> Performance stats, verification videos, and biographical info uploaded by athletes or coaches.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Facilitate connections between athletes, clubs, and sponsors.</li>
              <li>Verify the authenticity of athlete performance data.</li>
              <li>Improve platform functionality and user experience.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h2>
            <p>
              If you have questions about this policy, please contact us at <a href="mailto:privacy@runbridgepro.com" className="text-blue-600 hover:underline">privacy@runbridgepro.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;