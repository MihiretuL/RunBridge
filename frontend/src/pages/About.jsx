import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1533561052669-72266d6a2a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Runners training in Ethiopia" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bridging the Gap to <span className="text-blue-500">Greatness</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We are the direct link between elite East African talent and the global stage. 
            No middlemen. No guesswork. Just verified performance.
          </p>
        </div>
      </div>

      {/* 2. OUR MISSION / THE PROBLEM */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Talent is Universal.<br/>Opportunity is Not.
              </h2>
              <div className="prose prose-lg text-gray-500 space-y-6">
                <p>
                  For decades, some of the world's fastest runners in Ethiopia have gone undiscovered simply because they lacked a connection to international managers.
                </p>
                <p>
                  At the same time, clubs and federations in the US, Europe, and Middle East struggle to verify times, navigate visa logistics, and communicate with athletes in remote training camps.
                </p>
                <p className="font-bold text-gray-900">
                  RunBridge Pro fixes this broken chain.
                </p>
                <p>
                  We combine boots-on-the-ground scouting in Asella with corporate legal standards in Chicago to create a safe, transparent pathway for the next generation of champions.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <img 
                className="relative rounded-2xl shadow-xl w-full" 
                src="./images/scout.png" 
                alt="Scout talking to athlete" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE "DUAL PRESENCE" ADVANTAGE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Trust RunBridge?</h2>
            <p className="mt-4 text-lg text-gray-500">We operate globally to ensure seamless management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Chicago Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <span className="text-9xl">🇺🇸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global HQ • Chicago</h3>
              <p className="text-blue-600 font-medium mb-4">Business, Legal & Compliance</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Contract Negotiation & Sponsorships
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  US Visa & Immigration Support
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  NCAA Compliance for Student-Athletes
                </li>
              </ul>
            </div>

            {/* Ethiopia Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <span className="text-9xl">🇪🇹</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regional Ops • Asella</h3>
              <p className="text-green-600 font-medium mb-4">Scouting & Talent Development</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Direct access to training camps (Sululta, Bekoji)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  In-person time verification & biological passports
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Family liaison & local logistics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. THE TEAM (Simplified for MVP) */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Founder 1 */}
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
                <img src="/images/founder-us.jpg" alt="US Director" className="w-full h-full object-cover" />
                {/* Fallback if no image: <div className="w-full h-full flex items-center justify-center text-3xl">🇺🇸</div> */}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Didymos Likassa</h3>
                <p className="text-blue-600 font-medium">Managing Director (USA)</p>
                <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
                  Based in Chicago. Oversees global partnerships, legal contracts, and brand sponsorship.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
                 <img src="/images/founder-et.jpg" alt="Ethiopia Director" className="w-full h-full object-cover" />
                 {/* Fallback if no image: <div className="w-full h-full flex items-center justify-center text-3xl">🇪🇹</div> */}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Addisu Sima</h3>
                <p className="text-green-600 font-medium">Head of Scouting (Ethiopia)</p>
                <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
                 Based in Asella. Key regional figure with deep diplomatic ties to the Oromia Athletics Federation and local training camps.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. CTA */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find the next champion?</span>
            <span className="block text-blue-200">Start your search today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/athletes" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Browse Athletes
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;