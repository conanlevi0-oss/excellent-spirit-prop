import { MapPin, Phone, ChevronDown, ChevronUp, Ruler, Clock, Landmark, Share2, Heart } from 'lucide-react';
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
          <p className="page-subtitle animate-fade-in">Premium Real Estate Stock & Investment Opportunities</p>
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
            {Object.entries(estatesData)
              .filter(([road]) => road === "Excellent Spirit Stock as of 2026")
              .map(([road, estates]) => (
              <div key={road} className="premium-stock-section" style={{ marginBottom: '60px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                  {estates.slice(0, 9).map((estate, i) => (
                    <div key={i} className="property-card premium-card" style={{ 
                      background: 'white', 
                      borderRadius: '16px', 
                      overflow: 'hidden', 
                      boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
                      transition: 'all 0.3s ease',
                      border: '1px solid #f1f5f9',
                      position: 'relative'
                    }}>
                      {/* Property Image */}
                      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                        <img 
                          src={estate.image || '/exc.jpeg'} 
                          alt={estate.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                          className="card-img"
                        />
                        <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '8px' }}>
                          <button style={{ background: 'rgba(255,255,255,0.9)', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <Share2 size={18} />
                          </button>
                          <button style={{ background: 'rgba(255,255,255,0.9)', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <Heart size={18} />
                          </button>
                        </div>
                        <div style={{ position: 'absolute', bottom: '15px', left: '15px', background: 'var(--accent-gold)', color: 'white', padding: '5px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                          2026 Stock
                        </div>
                      </div>

                      {/* Property Details */}
                      <div style={{ padding: '25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '1.4rem' }}>{estate.price}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', background: '#f8fafc', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>{estate.distance}</span>
                        </div>
                        <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700', fontFamily: '"Inter", sans-serif' }}>{estate.name.toUpperCase()}</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                          {estate.description}
                        </p>
                        
                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--primary-blue)', fontSize: '0.85rem', fontWeight: '600' }}>
                            <Phone size={14} /> <span>Inquire Now</span>
                          </div>
                          <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>View Details</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Other Estates - Accordion/List View */}
            <div className="other-estates" style={{ marginTop: '30px' }}>
              <h2 style={{ color: 'var(--primary-blue)', marginBottom: '30px', borderBottom: '2px solid var(--accent-gold)', display: 'inline-block', paddingBottom: '10px' }}>Our Established Estates</h2>
              {Object.entries(estatesData)
                .filter(([road]) => road !== "Excellent Spirit Stock as of 2026")
                .map(([road, estates]) => (
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
                    <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{road.toUpperCase()}</span>
                    {expandedRoads.includes(road) ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedRoads.includes(road) && (
                    <div className="accordion-content" style={{ padding: '25px', background: '#f8fafc' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {estates.map((estate, i) => (
                          <div key={i} style={{ padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid #edf2f7', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <h4 style={{ color: 'var(--primary-blue)', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>{i + 1}. {estate.name.toUpperCase()}</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '1.2rem' }}>{estate.price.toUpperCase()}</span>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px' }}>{estate.distance.toUpperCase()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {estates.length > 10 && (
                        <div style={{ marginTop: '25px', textAlign: 'center' }}>
                          <a href="/exc.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            View more in PDF <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .property-card:hover .card-img {
          transform: scale(1.1);
        }
        .table-header-cell {
          padding: 15px 20px;
          font-weight: 700;
          text-transform: uppercase;
          fontSize: 0.85rem;
        }
        .table-body-cell {
          padding: 15px 20px;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .page-title { font-size: 2.5rem; }
          .filter-bar { flex-direction: column; gap: 15px; align-items: flex-start !important; }
          .table-header-cell {
            padding: 10px 8px;
            font-size: 0.65rem;
          }
          .table-body-cell {
            padding: 10px 8px;
            font-size: 0.7rem;
          }
          .road-section h3 {
            font-size: 1rem !important;
            padding: 10px 15px !important;
          }
        }
        @media (max-width: 480px) {
          .table-header-cell {
            font-size: 0.55rem;
            padding: 8px 4px;
          }
          .table-body-cell {
            font-size: 0.6rem;
            padding: 8px 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default Properties;
