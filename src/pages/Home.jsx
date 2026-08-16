import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  FileCheck, 
  Compass, 
  Calculator, 
  Download, 
  MessageCircle, 
  CheckCircle, 
  Phone,
  Layers,
  Sparkles,
  CalendarCheck,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import { flagshipEstates, roadCorridors } from '../data/estates';
import './Home.css';

const Home = () => {
  // Payment calculator state
  const [plotPrice, setPlotPrice] = useState(15000000);
  const [depositPercent, setDepositPercent] = useState(50);
  const [durationMonths, setDurationMonths] = useState(4);

  const initialDeposit = (plotPrice * depositPercent) / 100;
  const remainingBalance = plotPrice - initialDeposit;
  const monthlyInstallment = durationMonths > 0 ? remainingBalance / durationMonths : 0;

  const formatUGX = (num) => {
    return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 })
      .format(num)
      .replace('USh', '')
      .trim() + ' UGX';
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION - Architectural & High-Confidence */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-split-grid">
            {/* Left Content */}
            <div className="hero-editorial-left">
              <div className="hero-trust-tag">
                <span className="trust-indicator-pulse"></span>
                <span>Uganda Land Registration No. 80020003559554</span>
              </div>

              <h1 className="hero-headline">
                Authentic Land Ownership in Uganda, <span className="highlight-text">Built on Absolute Integrity.</span>
              </h1>

              <p className="hero-lead">
                Invest with peace of mind. Excellent Spirit Property Masters delivers 100% verified Private Mailo and Freehold plots, cadastral surveying, title transfers, and flexible 4-month payment plans across 40+ strategic road corridors.
              </p>

              <div className="hero-cta-row">
                <Link to="/properties" className="btn btn-gold btn-lg">
                  <span>Explore 2026 Estates</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  <CalendarCheck size={18} />
                  <span>Book Free Site Visit</span>
                </Link>
              </div>


              {/* Corridor Quick Links */}
              <div className="hero-corridors-bar">
                <span className="corridor-bar-label">Popular Corridors:</span>
                <div className="corridor-chips">
                  <Link to="/properties" className="corridor-chip">Gayaza Road (14)</Link>
                  <Link to="/properties" className="corridor-chip">Hoima Road (7)</Link>
                  <Link to="/properties" className="corridor-chip">Jinja Road (6)</Link>
                  <Link to="/properties" className="corridor-chip">Bombo Road (4)</Link>
                  <Link to="/properties" className="corridor-chip">Entebbe</Link>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="hero-editorial-right">
              <div className="hero-visual-card">
                <div className="hero-image-wrapper">
                  <img 
                    src="/hero_background.png" 
                    alt="Ugandan development land with boundary markers" 
                    className="hero-featured-image"
                  />
                  <div className="hero-image-badge">
                    <Award size={14} />
                    <span>Surveyed & Titled Stock</span>
                  </div>
                </div>

                <div className="hero-visual-caption">
                  <div className="caption-stat-item">
                    <span className="caption-stat-num">40+</span>
                    <span className="caption-stat-label">Active Estates</span>
                  </div>
                  <div className="caption-stat-item">
                    <span className="caption-stat-num">1,000+</span>
                    <span className="caption-stat-label">Land Titles Issued</span>
                  </div>
                  <div className="caption-stat-item">
                    <span className="caption-stat-num">50%</span>
                    <span className="caption-stat-label">Deposit (4 Mo. Plan)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4-STEP VERIFICATION GUARANTEE */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Buyer Protection Framework
            </span>
            <h2 className="section-title">The 4-Step Land Verification Guarantee</h2>
            <p className="section-desc">
              We eliminate the risk of land disputes and fraudulent paperwork in Uganda through our transparent, legally documented 4-step acquisition process.
            </p>
          </div>

          <div className="verification-steps-grid">
            <div className="verification-step-item">
              <div className="step-num-badge">01</div>
              <div className="step-icon-wrap">
                <ShieldCheck size={26} />
              </div>
              <h3>Ministry Title Search</h3>
              <p>
                Every estate undergoes official title search at the Ministry of Lands, Housing and Urban Development (NLIS) to confirm unencumbered ownership.
              </p>
            </div>

            <div className="verification-step-item">
              <div className="step-num-badge">02</div>
              <div className="step-icon-wrap">
                <Compass size={26} />
              </div>
              <h3>Cadastral Boundary Opening</h3>
              <p>
                Our registered geomatics surveyors physically open boundaries, place concrete deed markers, and ensure exact 50×100ft dimensions.
              </p>
            </div>

            <div className="verification-step-item">
              <div className="step-num-badge">03</div>
              <div className="step-icon-wrap">
                <FileCheck size={26} />
              </div>
              <h3>Transparent Sale Agreement</h3>
              <p>
                Legally binding sales agreements signed before legal counsel with flexible 50% deposit and transparent 4-month installment schedules.
              </p>
            </div>

            <div className="verification-step-item">
              <div className="step-num-badge">04</div>
              <div className="step-icon-wrap">
                <Award size={26} />
              </div>
              <h3>Prompt Title Transfer</h3>
              <p>
                Upon completion of payment, we process and hand over your authentic Certificate of Title directly into your name without unnecessary delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED 2026 ESTATE HIGHLIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot"></span>
                Prime Stock 2026
              </span>
              <h2 className="section-title">Flagship Estates Ready For Development</h2>
              <p className="section-desc">
                Hand-picked titled residential and commercial plots in rapid-growth zones.
              </p>
            </div>
            <Link to="/properties" className="btn btn-outline">
              <span>View All 42 Listings</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flagship-estates-grid">
            {flagshipEstates.slice(0, 6).map((estate) => (
              <article key={estate.id} className="estate-card">
                <div className="estate-card-image-box">
                  <img 
                    src={estate.image} 
                    alt={estate.name} 
                    className="estate-card-img"
                  />
                  <div className="estate-badges-overlay">
                    <span className="badge badge-primary">{estate.tenure}</span>
                    <span className="badge badge-gold">{estate.status}</span>
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
                      href={`https://wa.me/256777367716?text=Hello%20Excellent%20Spirit,%20I%20am%20interested%20in%20inspecting%20${encodeURIComponent(estate.name)}%20(${estate.price})`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-gold btn-sm btn-block"
                    >
                      <MessageCircle size={15} />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <Link to="/contact" className="btn btn-outline btn-sm btn-block">
                      <span>Book Inspection</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PAYMENT PLAN ESTIMATOR */}
      <section className="section bg-surface">
        <div className="container">
          <div className="calculator-layout">
            <div className="calculator-info">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot"></span>
                Transparent Financing
              </span>
              <h2 className="section-title">Calculate Your 4-Month Installment Plan</h2>
              <p className="calculator-intro-p">
                We believe land ownership should be accessible to all hardworking Ugandans and diaspora investors. Use our transparent estimator to calculate your deposit and 4-month breakdown with <strong>0% hidden interest</strong>.
              </p>

              <div className="calculator-perks">
                <div className="perk-item">
                  <CheckCircle size={18} className="gold-icon" />
                  <span>Start development with 50% deposit</span>
                </div>
                <div className="perk-item">
                  <CheckCircle size={18} className="gold-icon" />
                  <span>Clear structured 4-month balance</span>
                </div>
                <div className="perk-item">
                  <CheckCircle size={18} className="gold-icon" />
                  <span>Bank & SACCO financing friendly</span>
                </div>
              </div>

              <div className="calculator-cta">
                <Link to="/contact" className="btn btn-primary">
                  <span>Apply for Installment Plan</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="calculator-widget-box">
              <div className="calc-header">
                <Calculator size={20} className="gold-icon" />
                <h3>Plot Installment Calculator</h3>
              </div>

              {/* Price Selector */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label className="form-label">Select Plot Value (UGX):</label>
                  <span className="calc-live-val">{formatUGX(plotPrice)}</span>
                </div>
                <div className="calc-quick-pills">
                  {[5000000, 10000000, 15000000, 20000000, 32000000, 48000000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      className={`pill-btn ${plotPrice === val ? 'active' : ''}`}
                      onClick={() => setPlotPrice(val)}
                    >
                      {val / 1000000}M
                    </button>
                  ))}
                </div>
                <input 
                  type="range" 
                  min="4000000" 
                  max="75000000" 
                  step="1000000" 
                  value={plotPrice} 
                  onChange={(e) => setPlotPrice(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>

              {/* Deposit Selector */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label className="form-label">Initial Deposit Percentage:</label>
                  <span className="calc-live-val">{depositPercent}% ({formatUGX(initialDeposit)})</span>
                </div>
                <div className="calc-quick-pills">
                  {[40, 50, 60, 70].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      className={`pill-btn ${depositPercent === pct ? 'active' : ''}`}
                      onClick={() => setDepositPercent(pct)}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Cards */}
              <div className="calc-results-panel">
                <div className="calc-result-row">
                  <span>Initial Deposit Required:</span>
                  <strong>{formatUGX(initialDeposit)}</strong>
                </div>
                <div className="calc-result-row">
                  <span>Remaining Balance:</span>
                  <strong>{formatUGX(remainingBalance)}</strong>
                </div>
                <div className="calc-result-highlight">
                  <div>
                    <span className="highlight-sub">Monthly Payment (4 Months)</span>
                    <span className="highlight-price">{formatUGX(monthlyInstallment)}</span>
                  </div>
                  <span className="badge badge-emerald">0% Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES & CHRISTIAN ETHICS */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Why Choose Excellent Spirit
            </span>
            <h2 className="section-title">The 6 Pillars of Christian Stewardship</h2>
            <p className="section-desc">
              Founded on unshakeable Christian principles, our mission is to restore honor and honesty to the Ugandan real estate industry.
            </p>
          </div>

          <div className="values-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-index">01</div>
              <h3>Christ Centeredness</h3>
              <p>Everything we undertake is anchored in faith, honesty, and accountability before God and our clients.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-index">02</div>
              <h3>Biblical Stewardship</h3>
              <p>We treat every plot of land and every client shilling as a sacred trust to be managed responsibly.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-index">03</div>
              <h3>Professionalism</h3>
              <p>Our team of university-trained managers and licensed surveyors uphold the highest technical benchmarks.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-index">04</div>
              <h3>Servanthood</h3>
              <p>We listen patiently, answer questions thoroughly, and prioritize your family's future above short-term sales.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-index">05</div>
              <h3>Diligence</h3>
              <p>Zero shortcuts. Every title deed, boundary coordinate, and deed print is thoroughly vetted before listing.</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-index">06</div>
              <h3>Uncompromised Integrity</h3>
              <p>No hidden fees, no double selling, and zero dispute baggage. What you see is exactly what is titled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & CATALOG DOWNLOAD */}
      <section className="section section-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <span className="cta-eyebrow">Official Estate Catalog</span>
            <h2 className="cta-headline">Ready to Inspect Your Next Plot of Land?</h2>
            <p className="cta-sub">
              Download our complete 2025/2026 Estate Update price list covering 40+ estates across Gayaza, Hoima, Jinja, Bombo, and Mityana roads. Site visits are arranged from Monday to Saturday.
            </p>

            <div className="cta-buttons-row">
              <a 
                href="/exc.pdf" 
                download="Excellent_Spirit_Estate_Update_2025.pdf" 
                className="btn btn-gold btn-lg"
              >
                <Download size={18} />
                <span>Download 2025/2026 Catalog (PDF)</span>
              </a>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <CalendarCheck size={18} />
                <span>Schedule Inspection Call</span>
              </Link>
            </div>

            <div className="cta-quick-contacts">
              <span>Office Helpline: <a href="tel:+256777367716">+256 777 367716</a></span>
              <span className="dot-sep">•</span>
              <span>Location: Daaki House Makerere, Gayaza Road</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
