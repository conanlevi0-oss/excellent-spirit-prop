import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Award,
  ArrowRight,
  Compass,
  FileCheck
} from 'lucide-react';
import './Team.css';

const Team = () => {
  const leader = {
    name: "Agent Joshua Mwiseneza",
    title: "Team Leader & Team Captain",
    image: "/leader.jpeg",
    bio: "Team Leader and Team Captain at Excellent Spirit Property Masters Limited. Joshua holds a First Class Bachelor's Degree in Business Administration from Uganda Christian University (UCU) as well as a Master of Business Administration (MBA) from UCU. Over 7+ years of dedicated service in Uganda's real estate sector, he has directly guided over 1,000 families, individuals, and corporate clients in safely acquiring their titled plots across our estates.",
    education: [
      "Master of Business Administration (MBA) — Uganda Christian University (UCU)",
      "Bachelor of Business Administration (First Class Honors) — Uganda Christian University (UCU)"
    ],
    experienceYears: "7+ Years",
    clientsServed: "1,000+ Clients",
    specialization: "Land Tenure Conveyancing & Estate Strategic Development"
  };

  const departments = [
    {
      title: "Cadastral Surveying & Geomatics",
      icon: <Compass size={28} className="gold-icon" />,
      lead: "Eng. Samuel Okello",
      role: "Lead Land Surveyor",
      credentials: "BSc. Land Surveying & Geomatics (Makerere)",
      description: "Oversees physical boundary opening, mutation surveys, GPS coordinate verification, and boundary marker placement across all 40+ road corridor estates."
    },
    {
      title: "Legal Conveyancing & Title Searches",
      icon: <FileCheck size={28} className="gold-icon" />,
      lead: "Advocate Sarah Namubiru",
      role: "Senior Legal Counsel",
      credentials: "LLB (Hons), Dip. LP (LDC)",
      description: "Directs Ministry of Lands (NLIS) searches, legal sales agreement execution, stamp duty processing, and duplicate certificate of title transfers."
    },
    {
      title: "Estate Operations & Field Logistics",
      icon: <Briefcase size={28} className="gold-icon" />,
      lead: "David Mukasa",
      role: "Head of Field Operations",
      credentials: "BSc. Project Planning & Land Management",
      description: "Coordinates free physical site visit transportation from Daaki House Makerere and supervises road grading and neighborhood infrastructure development."
    },
    {
      title: "Client Care & Diaspora Advisory",
      icon: <Users size={28} className="gold-icon" />,
      lead: "Grace Atim",
      role: "Client Relations Manager",
      credentials: "BA. Public Relations & Communications",
      description: "Assists first-time buyers and overseas diaspora clients with customized payment plans, title status updates, and site inspection schedules."
    }
  ];

  return (
    <div className="team-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-eyebrow">Dedicated Professionals</span>
            <h1 className="page-hero-title">Our Leadership & Technical Experts</h1>
            <p className="page-hero-desc">
              Meet the qualified professionals committed to walking alongside you in every step of authentic land ownership, legal documentation, and surveying in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Leader In Focus */}
      <section className="section">
        <div className="container">
          <div className="leader-spotlight-card">
            <div className="leader-photo-box">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="leader-img"
              />
              <div className="leader-trust-stamp">
                <ShieldCheck size={18} className="gold-icon" />
                <span>Verified Leadership</span>
              </div>
            </div>

            <div className="leader-details-box">
              <span className="leader-role-tag">{leader.title}</span>
              <h2 className="leader-name">{leader.name}</h2>
              <p className="leader-bio-text">{leader.bio}</p>

              {/* Milestones Stats */}
              <div className="leader-metrics-grid">
                <div className="leader-metric-item">
                  <span className="metric-num">{leader.experienceYears}</span>
                  <span className="metric-lbl">Uganda Real Estate Experience</span>
                </div>
                <div className="leader-metric-item">
                  <span className="metric-num">{leader.clientsServed}</span>
                  <span className="metric-lbl">Happy Landowners Guided</span>
                </div>
                <div className="leader-metric-item">
                  <span className="metric-num">100%</span>
                  <span className="metric-lbl">Dispute-Free Title Delivery</span>
                </div>
              </div>

              {/* Academic Credentials */}
              <div className="leader-education-panel">
                <h4 className="edu-title">
                  <GraduationCap size={20} className="gold-icon" />
                  Academic & Professional Qualifications
                </h4>
                <ul className="edu-list">
                  {leader.education.map((edu, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="gold-icon flex-shrink" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leader Direct Actions */}
              <div className="leader-action-bar">
                <a 
                  href="https://wa.me/256777367716?text=Hello%20Agent%20Joshua,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20land%20acquisition"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-gold btn-sm"
                >
                  <MessageCircle size={16} />
                  <span>Consult with Agent Joshua</span>
                </a>
                <Link to="/contact" className="btn btn-outline btn-sm">
                  <span>Schedule Office Meeting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Departmental Competence
            </span>
            <h2 className="section-title">Technical Support & Legal Specialists</h2>
            <p className="section-desc">
              Every stage of your land purchase is safeguarded by qualified personnel working under strict ethical guidelines.
            </p>
          </div>

          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="dept-icon-box">
                  {dept.icon}
                </div>
                <h3 className="dept-title">{dept.title}</h3>
                <div className="dept-lead-info">
                  <span className="dept-lead-name">{dept.lead}</span>
                  <span className="dept-lead-role">{dept.role}</span>
                  <span className="dept-lead-cred">{dept.credentials}</span>
                </div>
                <p className="dept-desc">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Pledge */}
      <section className="section">
        <div className="container-narrow">
          <div className="team-pledge-card">
            <Award size={36} className="gold-icon" />
            <h2>Our Professional Pledge to Every Land Buyer</h2>
            <p>
              "We pledge never to withhold relevant information, never to sell unverified land, and to ensure that every boundary marker and certificate of title delivered represents true, honorable stewardship."
            </p>
            <span className="pledge-signature">— The Excellent Spirit Team</span>

            <div className="pledge-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Book Appointment with Our Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
