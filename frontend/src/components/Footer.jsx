// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
//         {/* TOP SECTION: 4-Column Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
//           {/* Column 1: Brand & Mission */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-extrabold text-white tracking-tight">
//               RUN<span className="text-blue-600">BRIDGE</span>
//             </h3>
//             <p className="text-sm text-gray-400 leading-relaxed">
//               Bridging the gap between elite East African talent and the global stage. Professional management, verified stats, and ethical representation.
//             </p>
//           </div>

//           {/* Column 2: Quick Navigation */}
//           <div>
//             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
//               </li>
//               <li>
//                 <Link to="/athletes" className="hover:text-blue-500 transition-colors">Scout Talent</Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact?reason=representation" className="hover:text-blue-500 transition-colors">Athlete Application</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Contact Info */}
//           <div>
//             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Headquarters</h4>
//             <ul className="space-y-3 text-sm text-gray-400">
//               <li className="flex items-start">
//                 <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//                 <span>
//                   Training Base<br/>
//                   Sululta, Ethiopia
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                 <a href="mailto:scouting@runbridgepro.com" className="hover:text-white transition-colors">
//                   scouting@runbridgepro.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Socials & Disclaimer */}
//           <div>
//             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
//             <div className="flex space-x-4 mb-6">
//               {/* Instagram/Twitter Placeholders */}
//               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
//                 <span className="sr-only">LinkedIn</span>
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
//                 <span className="sr-only">Twitter</span>
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
//               </a>
//             </div>
//             <p className="text-xs text-gray-500">
//               RunBridge Pro operates in compliance with World Athletics regulations for athlete representation.
//             </p>
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Copyright & Legal */}
//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-gray-500">
//             &copy; {currentYear} RunBridge Pro Agency. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             {/* UPDATED LINKS HERE: Pointing to real routes */}
//             <Link to="/privacy" className="text-gray-500 hover:text-white transition duration-300 text-xs">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="text-gray-500 hover:text-white transition duration-300 text-xs">
//               Terms of Service
//             </Link>
//             <Link to="/cookies" className="text-gray-500 hover:text-white transition duration-300 text-xs">
//               Cookie Settings
//             </Link>
//           </div>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;



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

          {/* Column 3: Dual Headquarters (ACCURATE VERSION) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Global Offices</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              
              {/* Chicago (Business HQ) */}
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-blue-500">🇺🇸</span>
                <span>
                  <strong className="text-gray-200">Global HQ</strong><br/>
                  Chicago, IL<br/>
                  United States
                </span>
              </li>

              {/* Asella (Regional Ops - NOT "Training Base") */}
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-green-500">🇪🇹</span>
                <span>
                  <strong className="text-gray-200">Regional Operations</strong><br/>
                  Asella, Oromia<br/>
                  Ethiopia
                </span>
              </li>

              <li className="pt-2">
                <a href="mailto:scouting@runbridgepro.com" className="text-blue-400 hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  scouting@runbridgepro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              
              {/* X (Formerly Twitter) */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 border border-gray-700 hover:border-white">
                <span className="sr-only">X</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all duration-300 border border-gray-700 hover:border-blue-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-pink-500">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
            &copy; {currentYear} RunBridge Pro Agency.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition duration-300 text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition duration-300 text-xs">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition duration-300 text-xs">
              Cookie Settings
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;