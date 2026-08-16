import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Search, 
  Filter, 
  FileDown, 
  MessageCircle, 
  ShieldCheck, 
  Compass, 
  CalendarCheck,
  CheckCircle2,
  Car,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react';
import { estatesData, flagshipEstates, roadCorridors } from '../data/estates';
import './Properties.css';

const Properties = () => {
  const [selectedCorridor, setSelectedCorridor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTenure, setSelectedTenure] = useState('all');

  // Convert raw estatesData dictionary into flattened list for easy search and filtering
  const allEstatesList = useMemo(() => {
    const list = [];
    Object.entries(estatesData).forEach(([category, items]) => {
      // Determine corridor id from category name
      let corridorId = 'other';
      if (category.toLowerCase().includes('gayaza')) corridorId = 'gayaza';
      else if (category.toLowerCase().includes('hoima')) corridorId = 'hoima';
      else if (category.toLowerCase().includes('jinja')) corridorId = 'jinja';
      else if (category.toLowerCase().includes('bombo')) corridorId = 'bombo';
      else if (category.toLowerCase().includes('mityana')) corridorId = 'mityana';
      else if (category.toLowerCase().includes('2026')) corridorId = 'all';

      items.forEach((item) => {
        list.push({
          ...item,
          category,
          corridorId: corridorId === 'all' ? (item.name.toLowerCase().includes('zirobwe') || item.name.toLowerCase().includes('busiika') || item.name.toLowerCase().includes('vumba') || item.name.toLowerCase().includes('janda') ? 'gayaza' : item.name.toLowerCase().includes('entebbe') ? 'entebbe' : 'other') : corridorId
        });
      });
    });
    return list;
  }, []);

  // Filtered flagship list
  const filteredFlagships = useMemo(() => {
    return flagshipEstates.filter((item) => {
      const matchesCorridor = selectedCorridor === 'all' || item.corridorId === selectedCorridor;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.corridor.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTenure = selectedTenure === 'all' || item.tenure.toLowerCase().includes(selectedTenure.toLowerCase());
      return matchesCorridor && matchesSearch && matchesTenure;
    });
  }, [selectedCorridor, searchQuery, selectedTenure]);

  // Road Categories for the directory
  const roadCategories = [
    { title: "Gayaza Road Estates", key: "Gayaza Road Estates", corridorId: "gayaza" },
    { title: "Hoima Road Estates", key: "Hoima Road Estates", corridorId: "hoima" },
    { title: "Jinja Road Estates", key: "Jinja Road Estates", corridorId: "jinja" },
    { title: "Bombo Road Estates", key: "Bombo Road Estates", corridorId: "bombo" },
    { title: "Mityana Road Estates", key: "Mityana Road Estates", corridorId: "mityana" }
  ];

  return (
    <div className="properties-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-eyebrow">Official 2026 Real Estate Stock</span>
            <h1 className="page-hero-title">Uganda Estate Catalog & Price Directory</h1>
            <p className="page-hero-desc">
              Browse over 40 authenticated estates across Gayaza, Hoima, Jinja, Bombo, and Mityana road corridors. All plots feature verified survey pointers, clear tenure status, and 4-month installment schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="catalog-toolbar-section">
        <div className="container">
          <div className="catalog-toolbar-card">
            {/* Search Input */}
            <div className="search-box-wrap">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by estate name (e.g. Zirobwe, Busiika, Matugga, Mukono)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="catalog-search-input"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Tenure Selector */}
            <div className="toolbar-tenure-select">
              <Filter size={16} className="filter-icon" />
              <select 
                value={selectedTenure} 
                onChange={(e) => setSelectedTenure(e.target.value)}
                className="tenure-dropdown"
              >
                <option value="all">All Tenure Types</option>
                <option value="mailo">Private Mailo (Titled)</option>
                <option value="freehold">Freehold Title</option>
                <option value="kabaka">Kabaka Land</option>
              </select>
            </div>

            {/* Catalog Download CTA */}
            <div className="toolbar-pdf-cta">
              <a 
                href="/exc.pdf" 
                download="Excellent_Spirit_Estate_Update_2025.pdf" 
                className="btn btn-primary btn-sm"
              >
                <FileDown size={15} />
                <span>Download PDF Price List</span>
              </a>
            </div>
          </div>

          {/* Road Corridor Tabs */}
          <div className="corridor-tabs-nav">
            {roadCorridors.map((corridor) => (
              <button
                key={corridor.id}
                type="button"
                className={`corridor-tab-btn ${selectedCorridor === corridor.id ? 'active' : ''}`}
                onClick={() => setSelectedCorridor(corridor.id)}
              >
                <span>{corridor.name}</span>
                <span className="corridor-count-badge">{corridor.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flagship Stock */}
      <section className="section catalog-content-section">
        <div className="container">
          <div className="catalog-section-heading">
            <div>
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot"></span>
                Ready To Develop
              </span>
              <h2 className="section-title">2026 Priority Estate Showcase</h2>
            </div>
            <span className="results-count-text">
              Showing {filteredFlagships.length} featured estates
            </span>
          </div>

          {filteredFlagships.length === 0 ? (
            <div className="no-results-box">
              <Info size={32} className="gold-icon" />
              <h3>No matching estates found</h3>
              <p>Try resetting your search query or switching to 'All Corridors'.</p>
              <button 
                type="button" 
                onClick={() => { setSearchQuery(''); setSelectedCorridor('all'); setSelectedTenure('all'); }}
                className="btn btn-outline btn-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="flagship-estates-grid">
              {filteredFlagships.map((estate) => (
                <article key={estate.id} className="estate-card">
                  <div className="estate-card-image-box">
                    <img 
                      src={estate.image} 
                      alt={estate.name} 
                      className="estate-card-img"
                    />
                    <div className="estate-badges-overlay">
                      <span className="badge badge-primary">{estate.tenure}</span>
                      <span className="badge badge-gold">{estate.corridor}</span>
                    </div>
                  </div>

                  <div className="estate-card-body">
                    <div className="estate-price-header">
                      <span className="estate-price-tag">{estate.price}</span>
                      <span className="estate-distance-tag">
                        <MapPin size={12} />
                        {estate.distance}
                      </span>
                    </div>

                    <h3 className="estate-name-title">{estate.name}</h3>
                    <p className="estate-short-desc">{estate.description}</p>

                    <div className="estate-spec-pills">
                      <span className="spec-pill">Plot: {estate.size}</span>
                      <span className="spec-pill">Deposit: {estate.deposit}</span>
                    </div>

                    <div className="estate-card-actions">
                      <a 
                        href={`https://wa.me/256777367716?text=Hello%20Excellent%20Spirit,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(estate.name)}%20(${estate.price})`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-gold btn-sm btn-block"
                      >
                        <MessageCircle size={15} />
                        <span>Inquire on WhatsApp</span>
                      </a>
                      <Link to="/contact" className="btn btn-outline btn-sm btn-block">
                        <span>Book Site Inspection</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Comprehensive Corridor Directory (Clean Data Grid) */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Complete Inventory Directory
            </span>
            <h2 className="section-title">All Established Road Corridor Estates</h2>
            <p className="section-desc">
              Standard residential and commercial plot sizes measure <strong>100 by 50 feet</strong>. Flexible payment plan of 50% deposit and balance within 4 months applies to all locations.
            </p>
          </div>

          <div className="corridor-directory-layout">
            {roadCategories
              .filter(cat => selectedCorridor === 'all' || selectedCorridor === cat.corridorId)
              .map((category) => {
                const categoryEstates = estatesData[category.key] || [];
                const filteredCategoryEstates = categoryEstates.filter(item => 
                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (filteredCategoryEstates.length === 0 && searchQuery) return null;

                return (
                  <div key={category.key} className="corridor-group-box">
                    <div className="corridor-group-header">
                      <div className="corridor-title-wrap">
                        <MapPin size={20} className="gold-icon" />
                        <h3>{category.title}</h3>
                      </div>
                      <span className="corridor-items-badge">{filteredCategoryEstates.length} Estates</span>
                    </div>

                    <div className="corridor-items-grid">
                      {filteredCategoryEstates.map((estate, idx) => (
                        <div key={idx} className="corridor-data-card">
                          <div className="corridor-data-top">
                            <span className="corridor-plot-idx">#{idx + 1}</span>
                            <span className="corridor-tenure-badge">{estate.tenure}</span>
                          </div>

                          <h4 className="corridor-estate-name">{estate.name}</h4>

                          <div className="corridor-data-metrics">
                            <div className="metric-box">
                              <span className="metric-label">Price:</span>
                              <span className="metric-val-price">{estate.price}</span>
                            </div>
                            <div className="metric-box">
                              <span className="metric-label">Distance:</span>
                              <span className="metric-val-dist">{estate.distance || "Near Main Road"}</span>
                            </div>
                          </div>

                          <div className="corridor-item-footer">
                            <a 
                              href={`https://wa.me/256777367716?text=Inquiry%20regarding%20${encodeURIComponent(estate.name)}%20(${estate.price})`}
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="direct-inquire-link"
                            >
                              <MessageCircle size={14} /> Inquire Now
                            </a>
                            <Link to="/contact" className="direct-book-link">
                              Inspect <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Site Inspection Experience Info */}
      <section className="section">
        <div className="container">
          <div className="inspection-info-card">
            <div className="inspection-left">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot"></span>
                Physical Site Visits
              </span>
              <h2>How Site Inspections Work</h2>
              <p>
                We conduct physical site inspections from <strong>Monday to Saturday</strong> departing from our head office at <strong>Daaki House Makerere</strong> (along Gayaza Road). 
              </p>
              <ul className="inspection-checklist">
                <li>
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Company vehicle transportation provided to and from site.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Physical boundary verification with cadastral survey maps.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Meet local neighbors and inspect access roads and utilities.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="gold-icon" />
                  <span>Zero pressure: review all title documents before making any financial commitment.</span>
                </li>
              </ul>
              <div className="inspection-cta-btns">
                <Link to="/contact" className="btn btn-gold">
                  <CalendarCheck size={16} />
                  <span>Book Free Inspection Appointment</span>
                </Link>
                <a href="tel:+256777367716" className="btn btn-outline-white">
                  <Phone size={16} />
                  <span>Call to Schedule: +256 777 367716</span>
                </a>
              </div>

            </div>

            <div className="inspection-right">
              <div className="inspection-badge-box">
                <Car size={36} className="gold-icon" />
                <h3>Guided Field Tours</h3>
                <p>Mon - Sat: 8:30 AM & 2:00 PM departures</p>
                <span className="office-departure-tag">Departing: Daaki House Makerere</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
