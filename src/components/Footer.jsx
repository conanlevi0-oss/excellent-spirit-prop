import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-lockup">
              <img 
                src="/exc.jpeg" 
                alt="Excellent Spirit Property Masters" 
                className="footer-logo-img" 
              />
              <div>
                <span className="footer-brand-name">EXCELLENT SPIRIT</span>
                <span className="footer-brand-sub">Property Masters Limited</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Uganda's trusted Christian-founded real estate company. We provide authenticated land ownership, boundary surveying, title processing, and flexible installment plans across major growth corridors.
            </p>

            <div className="footer-reg-badge">
              <ShieldCheck size={16} className="gold-icon" />
              <span>Official Reg No. 80020003559554</span>
            </div>

            <div className="footer-cta-quick">
              <a 
                href="https://wa.me/256777367716" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white btn-sm"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>
              <a 
                href="/exc.pdf" 
                download="Excellent_Spirit_Estate_Update_2025.pdf" 
                className="btn btn-outline-white btn-sm"
              >
                <FileDown size={15} />
                <span>PDF Catalog</span>
              </a>
            </div>
          </div>

          {/* Road Corridors Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Estate Corridors</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/properties">
                  Gayaza Road Estates (14)
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/properties">
                  Hoima Road Estates (7)
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/properties">
                  Jinja Road Estates (6)
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/properties">
                  Bombo Road Estates (4)
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/properties">
                  Mityana Road Estates (2)
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
              <li>
                <Link to="/properties">
                  Entebbe Kasanjje Plots
                  <ArrowUpRight size={13} className="link-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Real Estate Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services">Titled Land Sales</Link></li>
              <li><Link to="/services">Land Surveying & Geomatics</Link></li>
              <li><Link to="/services">Title Searches & Processing</Link></li>
              <li><Link to="/services">Boundary Demarcation & Pointers</Link></li>
              <li><Link to="/services">4-Month Flexible Financing</Link></li>
              <li><Link to="/about">Christian Stewardship Model</Link></li>
            </ul>
          </div>

          {/* Office & Direct Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Head Office</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="gold-icon flex-shrink" />
                <div>
                  <strong>Daaki House Makerere</strong>
                  <span>Just after Kubiiri Roundabout, along Gayaza Road, Kampala, Uganda</span>
                </div>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="gold-icon flex-shrink" />
                <div>
                  <a href="tel:+256777367716" className="footer-tel-link">+256 777 367716</a>
                  <span>Call or WhatsApp (Available Mon–Sat)</span>
                </div>
              </li>
              <li className="footer-contact-item">
                <Clock size={18} className="gold-icon flex-shrink" />
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Excellent Spirit Property Masters Limited. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <span>Built on Integrity & Transparency</span>
            <span className="dot-sep">•</span>
            <span>Registration No. 80020003559554</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
