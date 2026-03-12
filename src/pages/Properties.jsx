import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const listings = [
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
    },
    {
      id: 4,
      image: '/property_land_1.png',
      status: 'For Sale',
      type: 'Private Mailo Land',
      title: 'Commercial Frontage Plot',
      location: 'Main Road Frontage',
      price: 'Flexible Payment Plan',
      features: ['High traffic area', 'Ideal for business', 'Verified title']
    },
    {
      id: 5,
      image: '/hero_background.png',
      status: 'Sold Out',
      type: 'Freehold Land',
      title: 'Scenic View Plot',
      location: 'Suburbs of Kampala',
      price: 'Sold',
      features: ['Great views', 'Serene environment']
    },
    {
      id: 6,
      image: '/exc.jpeg',
      status: 'Available',
      type: 'Private Mailo Land',
      title: 'Affordable Residential Plots',
      location: 'Emerging Neighborhood',
      price: 'Installments Available',
      features: ['Fast developing', 'Good investment', 'Surveyed']
    }
  ];

  return (
    <div className="properties-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/hero_background.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">Land Listings</h1>
          <p className="page-subtitle animate-fade-in">Find your perfect plot in Uganda</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontWeight: '500', color: 'var(--text-light)' }}>Showing {listings.length} Properties</p>
            <div className="filter-options" style={{ display: 'flex', gap: '15px' }}>
              <select style={{ padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }}>
                <option>All Land Types</option>
                <option>Private Mailo</option>
                <option>Kabaka Land</option>
                <option>Freehold Land</option>
              </select>
              <select style={{ padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }}>
                <option>All Locations</option>
                <option>Gayaza road</option>
                <option>Hoima road</option>
                <option>Jinja road</option>
                <option>Masaka road</option>
                <option>Mityana road</option>
                <option>Entebbe road</option>
                <option>Bombo road</option>
              </select>
            </div>
          </div>

          <div className="properties-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
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
                  
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px', marginBottom: '20px' }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                      {property.features.map((feature, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%' }}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {property.status !== 'Sold Out' ? (
                    <Link to="/contact" className="btn btn-primary" style={{ display: 'flex', width: '100%' }}>Inquire About This Plot</Link>
                  ) : (
                    <button disabled className="btn btn-outline" style={{ width: '100%', opacity: '0.5', cursor: 'not-allowed' }}>Sold</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '20px' }}>Don't see what you're looking for?</p>
            <Link to="/contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} /> Contact our agents for more options
            </Link>
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
