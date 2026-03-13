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

      {/* 2025 Estate Update (Table Style) */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Excellent Spirit Stock as of 2026</span>
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

          <div className="estate-tables">
            {Object.entries(estatesData).map(([road, estates]) => (
              <div key={road} className="road-section" style={{ marginBottom: '50px' }}>
                <h3 style={{ 
                  background: 'var(--primary-blue)', 
                  color: 'white', 
                  padding: '15px 25px', 
                  borderRadius: '8px 8px 0 0',
                  margin: 0,
                  fontSize: '1.2rem',
                  fontFamily: '"Playfair Display", serif'
                }}>
                  {road}
                </h3>
                <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: '0 0 8px 8px' }}>
                  <table className="estate-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: '#f58220', color: 'white' }}>
                        <th style={{ padding: '15px 20px', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem' }}>Estate Name</th>
                        <th style={{ padding: '15px 20px', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem' }}>Price</th>
                        <th style={{ padding: '15px 20px', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem' }}>Distance</th>
                        {road === "Excellent Spirit Stock as of 2026" && (
                          <th style={{ padding: '15px 20px', fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem' }}>Deposit (70%)</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {estates.map((estate, i) => {
                        // Helper to calculate deposit if not present
                        const calculateDeposit = (priceStr) => {
                          if (estate.deposit) return estate.deposit;
                          // Extract number from price like "10m" or "from 9m"
                          const match = priceStr.match(/(\d+(\.\d+)?)/);
                          if (match) {
                            const val = parseFloat(match[1]);
                            const dep = (val * 0.7).toFixed(1);
                            return `${dep}${priceStr.includes('m') ? 'm' : ''}`;
                          }
                          return "-";
                        };

                        return (
                          <tr key={i} style={{ borderBottom: '1px solid #edf2f7', background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                            <td style={{ padding: '15px 20px', color: 'var(--primary-blue)', fontWeight: '600' }}>{i + 1}. {estate.name.toUpperCase()}</td>
                            <td style={{ padding: '15px 20px', color: 'var(--accent-gold)', fontWeight: '700' }}>{estate.price.toUpperCase()}</td>
                            <td style={{ padding: '15px 20px', fontSize: '0.9rem', color: 'var(--text-light)' }}>{estate.distance.toUpperCase()}</td>
                            {road === "Excellent Spirit Stock as of 2026" && (
                              <td style={{ padding: '15px 20px', color: 'var(--primary-blue)', fontWeight: '700' }}>{calculateDeposit(estate.price).toUpperCase()}</td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
