// // frontend/src/App.jsx

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Athletes from './pages/Athletes';
// import AthleteProfile from './pages/AthleteProfile';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import Header from './components/Header'; // Will create this next
// import Footer from './components/Footer'; // Will create this next
// import AdminDashboard from './pages/AdminDashboard';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header /> {/* Navigation bar */}
//         <main className="flex-grow">
//           <Routes>
//             {/* 1. Homepage loads -> Home.jsx */}
//             <Route path="/" element={<Home />} />
//             {/* 2. Athletes Page -> Athletes.jsx */}
//             <Route path="/athletes" element={<Athletes />} />
//             {/* 3. Athlete Profile Page -> AthleteProfile.jsx */}
//             <Route path="/athletes/:id" element={<AthleteProfile />} />
//             {/* 4. Contact Page -> Contact.jsx */}
//             <Route path="/contact" element={<Contact />} />
//             {/* Catch-all for 404 */}
//             <Route path="*" element={<NotFound />} />
//             <Route path="/admin" element={<AdminDashboard />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Athletes from './pages/Athletes';
import AthleteProfile from './pages/AthleteProfile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop'; 
import Login from './pages/Login'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsOfService from './pages/TermsOfService';
import CookieSettings from './pages/CookieSettings';

function App() {
  return (
    <Router>
      {/* This component listens to route changes and scrolls up */}
      <ScrollToTop /> 
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/athletes" element={<Athletes />} />
            <Route path="/athletes/:id" element={<AthleteProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} /> 
            {/* NEW LEGAL ROUTES */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookieSettings />} />
            
            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;