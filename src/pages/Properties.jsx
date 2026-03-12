import { MapPin, Phone, ChevronDown, ChevronUp, DollarSign, Ruler, Clock, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { estatesData } from '../data/estates';

const Properties = () => {
  const [expandedRoads, setExpandedRoads] = useState(['Gayaza Road Estates']);

  const toggleRoad = (road) => {
    setExpandedRoads(prev => 
      prev.includes(road) ? prev.filter(r => r !== road) : [...prev, road]
    );
  };

  const listings = [
    // ... (existing featured listings)
    {
      id: 1,
      image: '/property_land_1.png',
      status: 'For Sale',
      type: 'Private Mailo Land',
      title: 'Prime 50x100 Plot in Gayaza',
      location: 'Gayaza Road Area',
      price: 'Flexible Payment Plan',
      features: ['Ready title', 'Good access roads', 'Developed neighborhood']
    },
    {
      id: 2,
      image: '/hero_background.png',
      status: 'New Listing',
      type: 'Kabaka Land',
      title: 'Large Estate Land for Development',
      location: 'Kampala District',
      price: 'Contact for Price',
      features: ['Surveyed', 'Water & Electricity available', '4 Months Installments']
    },
    {
      id: 3,
      image: '/exc.jpeg',
      status: 'Available',
      type: 'Freehold Land',
      title: 'Residential Plot near Amenities',
      location: 'Kubiiri Roundabout Area',
      price: 'Flexible Payment Plan',
      features: ['Secure neighborhood', 'Clear documentation', 'Ready for immediate transfer']
    }
  ];

  return (
    <div className="properties-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/hero_background.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">Estate Catalog</h1>
          <p className="page-subtitle animate-fade-in">Over 80 Estates in Stock Across 7 Main Road Corridors</p>
        </div>
      </div>

      {/* Featured Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Featured Highlights</h2>
          <p className="section-subtitle">A selection of our prime property listings ready for development.</p>
          
          <div className="properties-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginTop: '40px' }}>
            {listings.map((property) => (
              <div key={property.id} className="property-card" style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)' }}>
                <div style={{ position: 'relative', height: '240px' }}>
                  <img src={property.image} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '15px', right: '15px', background: property.status === 'Sold Out' ? '#e53e3e' : 'var(--accent-gold)', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
                    {property.status}
                  </span>
                  <span style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'rgba(11, 34, 57, 0.8)', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '500' }}>
                    {property.type}
                  </span>
                </div>
                
                <div style={{ padding: '25px' }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '10px' }}>{property.price}</div>
                  <h3 style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', marginBottom: '15px', color: 'var(--primary-blue)' }}>{property.title}</h3>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', marginBottom: '20px', fontSize: '0.9rem' }}>
                    <MapPin size={16} /> {property.location}
                  </p>
                  
                  <Link to="/contact" className="btn btn-primary" style={{ display: 'flex', width: '100%' }}>Inquire Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Estate Update (Accordion Style) */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>New Estate Update 2025J</span>
            <h2 className="section-title">Comprehensive Price List</h2>
            <p className="section-subtitle">Examine our wide selection of estates grouped by major road access.</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
              <a href="/exc.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} /> View Full PDF
              </a>
              <a href="/exc.pdf" download="Excellent_Spirit_Estate_Update_2025.pdf" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                <ChevronDown size={18} /> Download Catalog
              </a>
            </div>
          </div>

          <div className="estate-accordion">
            {Object.entries(estatesData).map(([road, estates]) => (
              <div key={road} className="accordion-item" style={{ marginBottom: '15px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                <button 
                  onClick={() => toggleRoad(road)}
                  style={{ 
                    width: '100%', 
                    padding: '20px 25px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: expandedRoads.includes(road) ? 'var(--primary-blue)' : 'white',
                    color: expandedRoads.includes(road) ? 'white' : 'var(--primary-blue)',
                    border: 'none',
                    borderRadius: expandedRoads.includes(road) ? '8px 8px 0 0' : '8px',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{road}</span>
                  {expandedRoads.includes(road) ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {expandedRoads.includes(road) && (
                  <div className="accordion-content" style={{ padding: '0 25px 25px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
                      {estates.map((estate, i) => (
                        <div key={i} style={{ padding: '15px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #edf2f7' }}>
                          <h4 style={{ color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '1rem' }}>{estate.name}</h4>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.1rem' }}>{estate.price}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{estate.distance}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Information Section */}
      <section className="section bg-light-alt" style={{ backgroundColor: '#f0f4f7' }}>
        <div className="container">
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="info-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <Ruler className="mb-3" color="var(--accent-gold)" size={40} style={{ margin: '0 auto' }} />
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Plot Dimensions</h4>
              <p style={{ color: 'var(--text-light)' }}>Our standard plots measure <strong>100 by 50fts</strong>. Perfect for residential or light commercial development.</p>
            </div>
            <div className="info-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <Clock className="mb-3" color="var(--accent-gold)" size={40} style={{ margin: '0 auto' }} />
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Payment Plans</h4>
              <p style={{ color: 'var(--text-light)' }}>Flexible installments available. Pay <strong>50% deposit</strong> and the balance within <strong>4 months</strong>.</p>
            </div>
            <div className="info-item" style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <Landmark className="mb-3" color="var(--accent-gold)" size={40} style={{ margin: '0 auto' }} />
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Financing Options</h4>
              <p style={{ color: 'var(--text-light)' }}>We accept Bank financing, Full cash payments, and structured installment plans to suit your budget.</p>
            </div>
          </div>
          
          <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--primary-blue)', borderRadius: '12px', color: 'white' }}>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Ready to Inspect?</h3>
            <p style={{ opacity: '0.9', marginBottom: '30px' }}>Inspection is strictly by appointment. All our titled plots have ready land titles available for verification.</p>
            <Link to="/contact" className="btn btn-accent">Book Appointment Now</Link>
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
        .property-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg) !important;
        }
        @media (max-width: 768px) {
          .page-title { font-size: 2.5rem; }
          .filter-bar { flex-direction: column; gap: 15px; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
};

export default Properties;
