import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for getting in touch. We will get back to you shortly.');
  };

  return (
    <div className="contact-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/property_land_1.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">Contact Us</h1>
          <p className="page-subtitle animate-fade-in">We are here to help you</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '50px' }}>
            
            {/* Contact Info */}
            <div className="contact-info-panel" style={{ background: 'var(--primary-blue)', color: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}>
              <h2 style={{ fontSize: '2rem', fontFamily: '"Playfair Display", serif', marginBottom: '10px', color: 'white' }}>Get In Touch</h2>
              <p style={{ color: '#ccd6f6', marginBottom: '40px', lineHeight: '1.6' }}>
                Reach out to us for inquiries about land sales, surveying, documentation, or setting up a site visit.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <li style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'var(--accent-gold)' }}>Our Head Office</h4>
                    <p style={{ color: '#ccd6f6', lineHeight: '1.5' }}>
                      DAAKI HOUSE MAKERERE,<br />
                      Just after Kubiiri Roundabout,<br />
                      Along Gayaza Road,<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </li>
                
                <li style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'var(--accent-gold)' }}>Give Us A Call</h4>
                    <a href="tel:+256777367716" style={{ color: '#ccd6f6', textDecoration: 'none', display: 'block', marginBottom: '5px' }}>+256 777 367716</a>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'var(--accent-gold)' }}>Working Hours</h4>
                    <p style={{ color: '#ccd6f6' }}>Monday - Saturday:<br/>8:00 AM - 6:00 PM</p>
                  </div>
                </li>
              </ul>
              
              <div style={{ marginTop: '50px' }}>
                <a href="https://wa.me/256777367716" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', width: '100%', borderColor: '#25d366', color: 'white', backgroundColor: '#25d366' }}>
                  <MessageCircle size={20} style={{ marginRight: '10px' }} /> Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-panel" style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>Send Us A Message</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Whether you have a question about properties, our services, pricing, or anything else, our team is ready to answer all your questions.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>First Name</label>
                    <input type="text" required placeholder="John" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>Last Name</label>
                    <input type="text" required placeholder="Doe" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>Phone Number *</label>
                    <input type="tel" required placeholder="+256 7XX XXX XXX" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>Inquiry Type</label>
                  <select style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', backgroundColor: 'white' }}>
                    <option>General Inquiry</option>
                    <option>Land Purchase</option>
                    <option>Site Visit Request</option>
                    <option>Land Surveying Help</option>
                    <option>Title Processing Help</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--primary-blue)' }}>Message</label>
                  <textarea rows="5" required placeholder="How can we help you today?" style={{ width: '100%', padding: '12px 15px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '15px', fontSize: '1.1rem', marginTop: '10px' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ width: '100%', height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* Placeholder for Google Maps iframe */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03058866782!2d32.56453961528434!3d0.33405739344445353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb13b19b4b09%3A0xc0c98f86f780e9fd!2sMakerere%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>

      <style>{`
        .page-header {
          height: 350px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          text-align: center;
          color: white;
        }
        .page-title {
          font-size: 3.5rem;
          color: white;
          margin-bottom: 15px;
        }
        .page-subtitle {
          font-size: 1.2rem;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.9);
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--primary-blue) !important;
          box-shadow: 0 0 0 3px rgba(11, 34, 57, 0.1);
        }
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .page-title { font-size: 2.5rem; }
          .contact-form-panel { padding: 30px 20px !important; }
          form .form-group { grid-column: span 2; }
          .contact-grid > div:first-child form > div { display: flex; flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
