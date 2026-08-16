import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Compass, 
  Users, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Phone,
  FileCheck,
  HeartHandshake
} from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-eyebrow">Our Heritage & Mission</span>
            <h1 className="page-hero-title">Restoring Honor & Integrity to Uganda's Real Estate</h1>
            <p className="page-hero-desc">
              Excellent Spirit Property Masters Limited is a registered real estate firm founded on unshakeable Christian principles of stewardship, diligence, and transparent land ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Brand Story */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-eyebrow">
                <span className="section-eyebrow-dot"></span>
                Who We Are
              </span>
              <h2 className="section-title">Built to Protect Land Buyers & Families</h2>
              <p className="story-lead-p">
                In an industry frequently clouded by land wrangles, double allocation, and forged documentation, <strong>Excellent Spirit Property Masters Limited</strong> was established to provide an undeniable sanctuary of truth and transparency.
              </p>
              <p>
                Operating with official registration (<strong>Reg No. 80020003559554</strong>) under the laws of the Republic of Uganda, we specialize in authentic land sales, boundary surveying, title searches, and property management across Kampala and surrounding districts.
              </p>
              <p>
                From our physical offices at <strong>Daaki House Makerere</strong>, we have guided over 1,000 satisfied home builders, diaspora investors, and commercial developers into rightful, legally verified land ownership.
              </p>

              <div className="registration-certificate-card">
                <div className="cert-icon-box">
                  <ShieldCheck size={28} className="gold-icon" />
                </div>
                <div>
                  <h4>Statutory Legal Compliance</h4>
                  <p>Incorporated under the Companies Act of Uganda (Reg No. 80020003559554). All land transactions are supported by licensed advocates and certified geomatics surveyors.</p>
                </div>
              </div>
            </div>

            <div className="about-story-media">
              <div className="about-media-card">
                <img 
                  src="/exc.jpeg" 
                  alt="Excellent Spirit Property Masters Head Office" 
                  className="about-primary-img"
                />
                <div className="about-media-badge">
                  <HeartHandshake size={20} className="gold-icon" />
                  <div>
                    <strong>1,000+ Happy Landowners</strong>
                    <span>Transparent Title Transfers Since Inception</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Christian Values */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Our Ethical Foundation
            </span>
            <h2 className="section-title">The 6 Pillars of Our Conduct</h2>
            <p className="section-desc">
              Every interaction, contract, and survey is governed by principles drawn from biblical wisdom and professional accountability.
            </p>
          </div>

          <div className="pillars-expanded-grid">
            <div className="expanded-pillar-card">
              <span className="pillar-num">01</span>
              <h3>Christ Centeredness</h3>
              <p>We believe business is a platform for ministry. We honor God by conducting all dealings in truth, humility, and fairness without taking advantage of any client.</p>
            </div>

            <div className="expanded-pillar-card">
              <span className="pillar-num">02</span>
              <h3>Biblical Stewardship</h3>
              <p>Land is a precious God-given resource. We manage the land entrusted to us with deep responsibility, ensuring environmental respect and sustainable community development.</p>
            </div>

            <div className="expanded-pillar-card">
              <span className="pillar-num">03</span>
              <h3>Technical Professionalism</h3>
              <p>We combine strong moral grounding with rigorous professional standards: licensed surveyors, registered lawyers, and structured title delivery processes.</p>
            </div>

            <div className="expanded-pillar-card">
              <span className="pillar-num">04</span>
              <h3>Servanthood</h3>
              <p>Our priority is serving your family's future. We take time to understand your financial capacity, match you with suitable estates, and structure comfortable installment schedules.</p>
            </div>

            <div className="expanded-pillar-card">
              <span className="pillar-num">05</span>
              <h3>Diligence</h3>
              <p>We leave no stone unturned. Every parcel is verified at the Ministry of Lands, physically opened with cadastral markers, and inspected alongside local authorities.</p>
            </div>

            <div className="expanded-pillar-card">
              <span className="pillar-num">06</span>
              <h3>Integrity</h3>
              <p>Transparency is non-negotiable. What we promise in our catalog and sales agreements is delivered down to the exact boundary coordinate without hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Comparison */}
      <section className="section">
        <div className="container">
          <div className="about-commitment-card">
            <div className="commitment-header">
              <span className="section-eyebrow" style={{ color: 'var(--c-gold-light)' }}>The Excellent Spirit Difference</span>
              <h2>Why Property Buyers Trust Us Over Informal Brokers</h2>
            </div>

            <div className="commitment-grid">
              <div className="commitment-item">
                <CheckCircle2 size={24} className="gold-icon flex-shrink" />
                <div>
                  <h4>100% Verified Duplicate Titles</h4>
                  <p>We provide original search reports and deed prints for direct verification before any payment is transacted.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={24} className="gold-icon flex-shrink" />
                <div>
                  <h4>Zero Informal Roadside Brokerage</h4>
                  <p>You deal directly with registered corporate officers at our physical office with legal receipts and verifiable contracts.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={24} className="gold-icon flex-shrink" />
                <div>
                  <h4>4-Month In-House Installments</h4>
                  <p>Flexible 50% deposit and 4-month balance schedule with 0% penalty interest, making land ownership attainable.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={24} className="gold-icon flex-shrink" />
                <div>
                  <h4>Dedicated Site Visit Vehicles</h4>
                  <p>We provide guided transportation to our estates from Monday to Saturday, allowing you to walk the land yourself.</p>
                </div>
              </div>
            </div>

            <div className="commitment-cta">
              <Link to="/team" className="btn btn-gold">
                <span>Meet Our Leadership & Team</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                <span>Visit Our Makerere Office</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
