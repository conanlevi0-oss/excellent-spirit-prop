import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck, FileDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Credibility & Helpline Bar */}
      <div className="top-trust-bar">
        <div className="container top-trust-inner">
          <div className="trust-badges">
            <span className="trust-pill">
              <ShieldCheck size={14} className="trust-icon" />
              <span>Govt. Reg. No. 80020003559554</span>
            </span>
            <span className="location-pill desktop-only">
              Head Office: Daaki House Makerere, Gayaza Rd
            </span>
          </div>

          <div className="top-actions">
            <a href="tel:+256777367716" className="top-phone">
              <Phone size={13} />
              <span>+256 777 367716</span>
            </a>
            <a href="/exc.pdf" download="Excellent_Spirit_Estate_Update_2025.pdf" className="top-catalog-link desktop-only">
              <FileDown size={13} />
              <span>2025/2026 Catalog</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-wrapper">
        <div className="container main-nav-container">
          <Link to="/" className="brand-lockup">
            <img 
              src="/exc.jpeg" 
              alt="Excellent Spirit Property Masters Logo" 
              className="brand-logo-img" 
            />
            <div className="brand-text">
              <span className="brand-name">EXCELLENT SPIRIT</span>
              <span className="brand-tagline">Property Masters Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/properties" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Estate Catalog
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Services & Surveying
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Primary Action Button */}
          <div className="nav-cta-group desktop-only">
            <Link to="/contact" className="btn btn-primary btn-sm">
              <span>Book Site Visit</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            className="mobile-toggle-btn" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/properties" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Estate Catalog & Stock
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Services & Land Surveying
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                About & Christian Values
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Our Leadership & Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Contact & Office Location
              </NavLink>
            </li>
          </ul>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn btn-primary btn-block">
              Book Physical Site Inspection
            </Link>
            <a href="/exc.pdf" download="Excellent_Spirit_Estate_Update_2025.pdf" className="btn btn-outline btn-block">
              Download Full 2025/2026 Catalog (PDF)
            </a>
            <div className="mobile-contact-direct">
              <a href="tel:+256777367716" className="mobile-phone-link">
                <Phone size={16} /> Direct Call: +256 777 367716
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
