// frontend/src/components/Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg"> {/* Slightly stronger shadow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-runbridge-blue hover:text-accent-blue transition duration-300 transform hover:scale-105">
              RunBridge
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/athletes">Athletes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* CTA Button (Visible on large screens) */}
          <div className="hidden md:block">
            <Link
              to="/contact?reason=representation"
              className="px-4 py-2 border-2 border-runbridge-blue text-sm font-medium rounded-md text-white bg-runbridge-blue transition duration-300 shadow-md hover:bg-accent-blue hover:shadow-lg transform hover:scale-[1.03]"
            >
              Request Representation
            </Link>
          </div>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden">
            <button className="text-runbridge-blue p-2 hover:text-accent-blue transition duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

// Helper component for active link styling with added polish
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-runbridge-blue font-medium transition duration-300 hover:border-b-2 hover:border-accent-blue pb-1"
  >
    {children}
  </Link>
);

export default Header;