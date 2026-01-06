import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* TOP SECTION: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              RUN<span className="text-blue-600">BRIDGE</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bridging the gap between elite East African talent and the global stage. Professional management, verified stats, and ethical representation.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/athletes" className="hover:text-blue-500 transition-colors">Scout Talent</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/contact?reason=representation" className="hover:text-blue-500 transition-colors">Athlete Application</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Headquarters</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>
                  Training Base<br/>
                  Sululta, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:scouting@runbridgepro.com" className="hover:text-white transition-colors">
                  scouting@runbridgepro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials & Disclaimer */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {/* Instagram/Twitter Placeholders */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
            </div>
            <p className="text-xs text-gray-500">
              RunBridge Pro operates in compliance with World Athletics regulations for athlete representation.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} RunBridge Pro Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition duration-300 text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition duration-300 text-xs">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition duration-300 text-xs">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;