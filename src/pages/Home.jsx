import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Building2, Map, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.7), rgba(11, 34, 57, 0.7)), url("/hero_background.png")' }}>
        <div className="container hero-content animate-fade-in">
          <span className="hero-subtitle">Registration No. 80020003559554</span>
          <h1 className="hero-title">Trusted Real Estate Solutions in Uganda</h1>
          <p className="hero-description">
            Experience integrity, professionalism, and transparency in land sales, surveying, and documentation with Excellent Spirit Property Masters Limited.
          </p>
          <div className="hero-buttons">
            <Link to="/properties" className="btn btn-accent">View Properties <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-text">
            <h2 className="section-title" style={{textAlign: 'left'}}>Building Trust, Securing Futures</h2>
            <p className="lead-text">
              Excellent Spirit Property Masters Limited is a registered real estate company operating on strong Christian values. We specialize in providing authentic land ownership solutions tailored to your needs.
            </p>
            <p>
              Whether you are looking for Private Mailo land, Kabaka land, or Freehold land, we guide you through a transparent process with flexible payment plans of up to 4 months.
            </p>
            <div className="trust-indicators">
              <div className="trust-item">
                <Shield size={24} className="trust-icon" />
                <span>Registered & Verified</span>
              </div>
              <div className="trust-item">
                <div className="rating-stars">
                  <Star size={20} fill="#dfbe7d" color="#dfbe7d" />
                  <Star size={20} fill="#dfbe7d" color="#dfbe7d" />
                  <Star size={20} fill="#dfbe7d" color="#dfbe7d" />
                  <Star size={20} fill="#dfbe7d" color="#dfbe7d" />
                  <Star size={20} fill="#dfbe7d" color="#dfbe7d" />
                </div>
                <span>5.0 Google Reviews</span>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary mt-4">More About Us</Link>
          </div>
          <div className="intro-image-wrapper">
            <img src="/excellent.jpeg" alt="Excellent Spirit" className="intro-image" />
            <div className="experience-badge">
              <span>Trusted Christian</span>
              <strong>Real Estate</strong>
              <span>Company</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light-alt">
        <div className="container">
          <h2 className="section-title">Our Featured Services</h2>
          <p className="section-subtitle">We offer comprehensive real estate solutions across Uganda with uncompromised integrity.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrap">
                <Map size={32} />
              </div>
              <h3>Land Sales</h3>
              <p>Secure prime locations. We deal in Private Mailo (with title), Kabaka land, and Freehold land.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-wrap">
                <MapPin size={32} />
              </div>
              <h3>Land Surveying</h3>
              <p>Professional surveying services to ensure accurate boundaries and secure your investment.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-wrap">
                <Building2 size={32} />
              </div>
              <h3>Title Processing</h3>
              <p>Expert assistance with transfers and all necessary land documentation seamlessly.</p>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline" style={{ display: 'inline-flex', margin: '0 auto' }}>Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section properties-preview">
        <div className="container">
          <div className="flex-header">
            <h2 className="section-title mb-0" style={{textAlign:'left'}}>Featured Properties</h2>
            <Link to="/properties" className="view-all-link">View All Listings <ArrowRight size={16}/></Link>
          </div>
          
          <div className="properties-grid mt-4">
            <div className="property-card">
              <div className="property-img">
                <img src="/property_land_1.png" alt="Prime Plot in Kampala Suburb" />
                <span className="badge">For Sale</span>
              </div>
              <div className="property-content">
                <div className="property-price">Flexible Payment Plan</div>
                <h3>Prime Plot Location</h3>
                <p className="property-location"><MapPin size={16}/> Kampala District</p>
                <div className="property-features">
                  <span>Private Mailo Title</span>
                  <span>Ready to develop</span>
                </div>
                <Link to="/contact" className="btn btn-primary btn-block">Inquire Now</Link>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-img">
                <img src="/hero_background.png" alt="Large Development Land" />
                <span className="badge">New Listing</span>
              </div>
              <div className="property-content">
                <div className="property-price">Inquire for Price</div>
                <h3>Scenic Estate Land</h3>
                <p className="property-location"><MapPin size={16}/> Gayaza Road Area</p>
                <div className="property-features">
                  <span>Freehold Land</span>
                  <span>4 Months Installments</span>
                </div>
                <Link to="/contact" className="btn btn-primary btn-block">Inquire Now</Link>
              </div>
            </div>
            
            <div className="property-card promo-card">
              <div className="promo-content">
                <h3>Looking for a specific property?</h3>
                <p>Let our experts find the perfect land that meets your requirements and budget.</p>
                <Link to="/contact" className="btn btn-accent mt-3">Request Property</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial CTA */}
      <section className="section cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Start Your Real Estate Journey With Us</h2>
            <p>We pride ourselves on <strong>customer care</strong> and <strong>excellent service</strong>. Join our happy clients who have experienced a trusted, transparent and approved real estate process.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">Contact Our Team</Link>
              <a href="https://wa.me/256777367716" className="btn btn-outline" style={{color:'white', borderColor:'white'}}>Chat on WhatsApp</a>
            </div>
          </div>
          <div className="cta-testimonial">
            <div className="quote-icon">"</div>
            <p className="quote-text">Trusted, transparent and approved real estate company in Uganda. Excellent customer care and excellent service.</p>
            <div className="quote-author">
              <div className="quote-stars">
                <Star size={16} fill="#dfbe7d" color="#dfbe7d" />
                <Star size={16} fill="#dfbe7d" color="#dfbe7d" />
                <Star size={16} fill="#dfbe7d" color="#dfbe7d" />
                <Star size={16} fill="#dfbe7d" color="#dfbe7d" />
                <Star size={16} fill="#dfbe7d" color="#dfbe7d" />
              </div>
              <strong>Satisfied Client</strong>
              <span>Google Review</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
