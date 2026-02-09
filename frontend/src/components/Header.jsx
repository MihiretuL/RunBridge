import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Check if we are on the contact page for the button styling
  const isContactPage = location.pathname === '/contact';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. BRANDING & LOGO */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
                  RUN<span className="text-blue-600">BRIDGE</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">
                  Pro Talent Management
                </span>
              </div>
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION (Updated with About) */}
          <nav className="hidden md:flex space-x-8 items-center">
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/about">About Us</CustomNavLink> {/* <--- ADDED HERE */}
            <CustomNavLink to="/athletes">Scout Talent</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </nav>

          {/* 3. CTA BUTTON (Desktop) */}
          <div className="hidden md:block">
            {!isContactPage && (
              <Link
                to="/contact?reason=representation"
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
              >
                Request Representation
              </Link>
            )}
          </div>

          {/* 4. MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN (Updated with About) */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <MobileNavLink to="/" onClick={closeMenu}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={closeMenu}>About Us</MobileNavLink> {/* <--- ADDED HERE */}
          <MobileNavLink to="/athletes" onClick={closeMenu}>Scout Talent</MobileNavLink>
          <MobileNavLink to="/contact" onClick={closeMenu}>Contact</MobileNavLink>
          
          <div className="pt-4 mt-4 border-t border-gray-100">
             <Link
              to="/contact?reason=representation"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Request Representation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- HELPER COMPONENTS ---

// Desktop Link with "Active" Underline logic
const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-bold uppercase tracking-wide transition-colors duration-300 border-b-2 py-1 ${
        isActive 
          ? "text-blue-600 border-blue-600" 
          : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
      }`
    }
  >
    {children}
  </NavLink>
);

// Mobile Link Style
const MobileNavLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-3 py-3 rounded-md text-base font-medium ${
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      }`
    }
  >
    {children}
  </NavLink>
);

export default Header;