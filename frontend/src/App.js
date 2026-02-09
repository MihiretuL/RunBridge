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
import About from './pages/About';

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
            <Route path="/about" element={<About />} />
            
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