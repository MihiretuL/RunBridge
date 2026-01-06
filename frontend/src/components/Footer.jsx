// frontend/src/components/Footer.jsx

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-runbridge-blue text-white mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} RunBridge Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;