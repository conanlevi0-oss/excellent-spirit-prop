import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <p>Registration No. 80020003559554</p>
          <div className="top-contact">
            <Phone size={16} />
            <a href="tel:+256777367716">+256 777 367716</a>
          </div>
        </div>
      </div>
      
      <nav className="navbar container">
        <Link to="/" className="navbar-logo">
          <img src="/exc.jpeg" alt="Excellent Spirit Property Masters Ltd Logo" />
          <div className="logo-text">
            <h2>Excellent Spirit</h2>
            <span>Property Masters Ltd</span>
          </div>
        </Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""} onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({isActive}) => isActive ? "active-link" : ""} onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" className={({isActive}) => isActive ? "active-link" : ""} onClick={toggleMenu}>
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : ""} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li className="nav-cta">
            <Link to="/contact" className="btn btn-primary" onClick={toggleMenu}>
              Request Help
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
