import { CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/property_land_1.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">About Us</h1>
          <p className="page-subtitle animate-fade-in">Trusted Christian Real Estate Company in Uganda</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'center' }}>
            <div className="about-images">
              <img src="/excellent.jpeg" alt="Excellent Spirit Offices" style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            
            <div className="about-text">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Our Mission</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.8' }}>
                Excellent Spirit Property Masters Limited is a registered real estate company in Uganda (Registration No. 80020003559554) dedicated to transforming the real estate landscape through integrity, transparency, and professional excellence.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.8' }}>
                We specialize in land sales, surveying, and document processing. Operating on strong Christian values, we aim to serve all our clients—individuals and organizations alike—with diligence and accountability.
              </p>
              
              <h3 style={{ color: 'var(--primary-blue)', margin: '40px 0 20px', fontFamily: '"Playfair Display", serif', fontSize: '1.8rem' }}>Core Values</h3>
              <ul className="values-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {[
                  'Christ-centeredness',
                  'Stewardship',
                  'Integrity',
                  'Diligence',
                  'Professionalism',
                  'Transparency'
                ].map((value, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', fontWeight: '500' }}>
                    <CheckCircle2 size={20} color="var(--accent-gold)" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light-alt" style={{ backgroundColor: '#f0f4f8' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Excellent Spirit?</h2>
          <p className="section-subtitle">A heritage of trust and reliable service across Uganda.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {[
              { title: 'Registered & Approved', desc: 'Fully registered with the government of Uganda, offering secure and legally binding transactions.' },
              { title: 'Flexible Payment Plans', desc: 'We understand your financial planning needs, offering flexible installments of up to 4 months.' },
              { title: 'Verified Land Titles', desc: 'Secure Private Mailo, Kabaka land, and Freehold land knowing all documentation is meticulously verified.' }
            ].map((item, index) => (
              <div key={index} style={{ background: 'white', padding: '40px 30px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontFamily: '"Playfair Display", serif', fontSize: '1.4rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
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
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .page-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
