import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  CalendarCheck,
  Send,
  Car
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [inquiryType, setInquiryType] = useState('Site Visit Request');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredCorridor: 'Gayaza Road',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-eyebrow">Direct Office & Field Operations</span>
            <h1 className="page-hero-title">Book a Site Inspection or Visit Our Office</h1>
            <p className="page-hero-desc">
              Have questions about available plots, title verification, or flexible payment plans? Contact our team or visit us at Daaki House Makerere.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Contact Information Card */}
            <div className="contact-info-card">
              <div className="info-card-header">
                <span className="info-eyebrow">Headquarters & Client Centre</span>
                <h2>Get in Touch</h2>
                <p>
                  Our advisory desk is open Monday through Saturday to assist you with plot inquiries, legal title searches, and guided field inspections.
                </p>
              </div>

              <div className="contact-methods-list">
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <MapPin size={22} className="gold-icon" />
                  </div>
                  <div>
                    <h4>Physical Office Location</h4>
                    <p>
                      <strong>DAAKI HOUSE MAKERERE</strong><br />
                      Just after Kubiiri Roundabout, along Gayaza Road<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Phone size={22} className="gold-icon" />
                  </div>
                  <div>
                    <h4>Direct Telephone Helpline</h4>
                    <a href="tel:+256777367716" className="method-link-tel">+256 777 367716</a>
                    <span className="method-sub-text">Available Mon – Sat, 8:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Clock size={22} className="gold-icon" />
                  </div>
                  <div>
                    <h4>Working & Inspection Hours</h4>
                    <p>
                      Monday – Saturday: <strong>8:00 AM – 6:00 PM</strong><br />
                      Sunday: <em>Closed for Christian worship</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Connect */}
              <div className="contact-card-actions">
                <a 
                  href="https://wa.me/256777367716?text=Hello%20Excellent%20Spirit,%20I%20would%20like%20to%20inquire%20about%20land%20inspection" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-gold btn-block"
                >
                  <MessageCircle size={18} />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>

              {/* Compliance Stamp */}
              <div className="office-compliance-stamp">
                <ShieldCheck size={16} className="gold-icon flex-shrink" />
                <span>Statutory Reg No. 80020003559554</span>
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="gold-icon" />
                  </div>
                  <h3>Thank You, {formData.fullName || "Valued Client"}!</h3>
                  <p>
                    Your inquiry regarding <strong>{inquiryType}</strong> has been received by our office. An officer will reach out to you via <strong>{formData.phone || "your phone"}</strong> within 2 hours to confirm details.
                  </p>
                  <div className="success-actions">
                    <button 
                      type="button" 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Submit Another Inquiry
                    </button>
                    <a 
                      href="https://wa.me/256777367716" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <MessageCircle size={16} />
                      <span>Instant WhatsApp Follow-up</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-header">
                    <h2>Send Us a Message or Request Inspection</h2>
                    <p>Select your inquiry type below to route your request directly to the appropriate department.</p>
                  </div>

                  {/* Inquiry Type Tabs */}
                  <div className="inquiry-type-tabs">
                    {['Site Visit Request', 'Land Purchase Inquiry', 'Title & Surveying Help', 'General Inquiry'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`type-tab-btn ${inquiryType === type ? 'active' : ''}`}
                        onClick={() => setInquiryType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        required 
                        placeholder="e.g. Dr. Robert Ssekandi" 
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required 
                        placeholder="+256 7XX XXX XXX" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input" 
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address (Optional)</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder="robert@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredCorridor">Preferred Road Corridor</label>
                      <select 
                        id="preferredCorridor"
                        name="preferredCorridor"
                        value={formData.preferredCorridor}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Gayaza Road">Gayaza Road (Zirobwe, Busiika, Janda)</option>
                        <option value="Hoima Road">Hoima Road (Nansana, Wakiso, Namayumba)</option>
                        <option value="Jinja Road">Jinja Road (Mukono, Kalagi, Mbalala)</option>
                        <option value="Bombo Road">Bombo Road (Matugga, Kavule, Bombo Town)</option>
                        <option value="Mityana Road">Mityana Road (Buloba, Bbira)</option>
                        <option value="Entebbe">Entebbe / Kasanjje Area</option>
                      </select>
                    </div>
                  </div>

                  {inquiryType === 'Site Visit Request' && (
                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredDate">
                        Preferred Inspection Date (Mon – Sat)
                      </label>
                      <input 
                        type="date" 
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="form-input" 
                      />
                      <span className="form-hint">
                        <Car size={14} /> Inspections depart from Daaki House Makerere at 8:30 AM & 2:00 PM.
                      </span>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Specific Requirements</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4} 
                      placeholder="Please let us know your budget, intended use (residential/commercial), or any specific estate you wish to inspect..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <Send size={16} />
                    <span>Submit {inquiryType}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-card-wrapper">
            <div className="map-header-bar">
              <div className="map-title-wrap">
                <MapPin size={20} className="gold-icon" />
                <div>
                  <h3>Head Office Map Coordinates</h3>
                  <span>Daaki House Makerere, Gayaza Road (Just after Kubiiri Roundabout), Kampala</span>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Makerere+Kubiiri+Kampala" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="map-iframe-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03058866782!2d32.56453961528434!3d0.33405739344445353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb13b19b4b09%3A0xc0c98f86f780e9fd!2sMakerere%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug" 
                width="100%" 
                height="380" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Excellent Spirit Property Masters Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
