import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/exc.jpeg" alt="Excellent Spirit Property Masters Ltd" />
            <h3>Excellent Spirit</h3>
          </div>
          <p className="footer-desc">
            Your Trusted Christian Real Estate Company in Uganda. Specializing in Land Sales, Land Surveying, and Document Processing.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col services-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Land Sales (Mailo, Kabaka, Freehold)</Link></li>
            <li><Link to="/services">Land Surveying</Link></li>
            <li><Link to="/services">Title Transfer & Processing</Link></li>
            <li><Link to="/services">Flexible Payment Plans</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>DAAKI HOUSE MAKERERE,<br/>Just after Kubiiri Roundabout,<br/>Along Gayaza Road, Kampala</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+256777367716">+256 777 367716</a>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Excellent Spirit Property Masters Ltd. All rights reserved.</p>
          <p className="registration">Registration No. 80020003559554</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
