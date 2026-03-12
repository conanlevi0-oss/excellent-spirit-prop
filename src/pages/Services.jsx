import { Map, MapPin, Building2, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "land-sales",
      icon: <Map size={40} color="var(--accent-gold)" />,
      title: "Land Sales",
      category: "Our Premium Service",
      description: "We offer secure and prime locations for both residential and commercial development. All our land transactions are legally verified and transparent.",
      features: [
        "Private Mailo Land (with title)",
        "Kabaka Land options",
        "Freehold Land in emerging areas",
        "Assisted site visits in and around Kampala"
      ],
      image: "/property_land_1.png"
    },
    {
      id: "surveying",
      icon: <MapPin size={40} color="var(--accent-gold)" />,
      title: "Land Surveying",
      category: "Professional Services",
      description: "Our licensed surveyors provide precise measurements and boundary demarcation to ensure your investment is protected and legally sound.",
      features: [
        "Boundary opening and marking",
        "Topographical surveys",
        "Subdivision of land",
        "Resolution of boundary disputes"
      ],
      image: "/hero_background.png"
    },
    {
      id: "title-transfer",
      icon: <Building2 size={40} color="var(--accent-gold)" />,
      title: "Land Title Processing",
      category: "Legal & Administrative",
      description: "We navigate the complex administrative processes of land documentation in Uganda so you don't have to.",
      features: [
        "Transfer of land titles",
        "Registration of caveats",
        "Search and verification of titles",
        "Comprehensive documentation support"
      ],
      image: "/exc.jpeg"
    },
    {
      id: "financing",
      icon: <CreditCard size={40} color="var(--accent-gold)" />,
      title: "Flexible Payment Plans",
      category: "Client Support",
      description: "We believe everyone deserves a chance to own property. Our payment plans are designed to be accommodating and transparent.",
      features: [
        "Up to 4 months installment options",
        "Clear payment schedules",
        "No hidden interest rates",
        "Secure payment channels"
      ],
      image: "/hero_background.png"
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/hero_background.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">Our Services</h1>
          <p className="page-subtitle animate-fade-in">Comprehensive Land Solutions in Uganda</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {services.map((service, index) => (
              <div key={service.id} className="service-row" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', 
                gap: '50px', 
                alignItems: 'center',
                direction: index % 2 !== 0 ? 'rtl' : 'ltr'
              }}>
                <div style={{ direction: 'ltr' }}>
                  <img src={service.image} alt={service.title} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} />
                </div>
                
                <div style={{ direction: 'ltr' }}>
                  <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{service.category}</span>
                  <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', color: 'var(--primary-blue)', margin: '10px 0 20px' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-light)', marginBottom: '30px' }}>{service.description}</p>
                  
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', fontWeight: '500' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light-alt" style={{ backgroundColor: '#f0f4f8', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', color: 'var(--primary-blue)', marginBottom: '20px' }}>Need Land Documentation Help?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px' }}>
            Our experts are ready to assist you with land surveying, title transfers, and securing your investment.
          </p>
          <a href="https://wa.me/256777367716" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Request Assistance</a>
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
          .service-row { grid-template-columns: 1fr !important; direction: ltr !important; }
          .page-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Services;
