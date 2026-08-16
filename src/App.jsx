import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Team from './pages/Team';
import { MessageCircle } from 'lucide-react';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Modern Floating WhatsApp Connect Button */}
        <a 
          href="https://wa.me/256777367716?text=Hello%20Excellent%20Spirit%20Property%20Masters,%20I%20am%20interested%20in%20inspecting%20your%20titled%20land%20estates." 
          className="whatsapp-floating"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Excellent Spirit Property Masters"
        >
          <span className="whatsapp-icon-pulse">
            <MessageCircle size={22} />
          </span>
          <span className="whatsapp-text">Chat with Advisor</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
