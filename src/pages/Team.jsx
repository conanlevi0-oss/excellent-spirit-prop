import { MapPin, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Agent Joshua Mwiseneza",
      role: "Team Leader & Team Captain",
      image: "/leader.jpeg",
      bio: "Team leader and team captain at Excellent Spirit Property Masters Limited with first class degree in Business administration from Uganda Christian university. Plus Masters of Business administration from Uganda Christian university. With an experience of 7 years in real estate and served over 1000 clients and helped them acquire their plots of land in our estates.",
      education: [
        "First Class Degree in Business Administration - Uganda Christian University",
        "Masters of Business Administration - Uganda Christian University"
      ],
      experience: "7+ Years",
      clients: "1000+"
    },
    {
      name: "Eng. Samuel Okello",
      role: "Lead Land Surveyor",
      image: "/exc.jpeg", // Placeholder
      bio: "A registered professional surveyor with extensive experience in boundary opening and cadastral surveys across Uganda.",
      education: ["BSc. Land Surveying & Geomatics"],
      experience: "10 Years",
      clients: "800+"
    },
    {
      name: "Sarah Namubiru",
      role: "Senior Legal Consultant",
      image: "/exc.jpeg", // Placeholder
      bio: "Specializes in land law and title processing. Sarah ensures every transaction is legally sound and transparent for our clients.",
      education: ["Bachelor of Laws (LLB)"],
      experience: "5 Years",
      clients: "500+"
    },
    {
      name: "David Mukasa",
      role: "Head of Operations",
      image: "/exc.jpeg", // Placeholder
      bio: "Overseeing daily project management and ensuring our estates are developed to the highest standards.",
      education: ["Bachelors in Management Systems"],
      experience: "6 Years",
      clients: "N/A"
    },
    {
      name: "Grace Atim",
      role: "Client Relations Manager",
      image: "/exc.jpeg", // Placeholder
      bio: "Grace is your first point of contact, dedicated to understanding your property needs and matching you with your dream plot.",
      education: ["Bachelors in Public Relations"],
      experience: "4 Years",
      clients: "400+"
    }
  ];

  const leader = teamMembers[0];
  const staff = teamMembers.slice(1);

  return (
    <div className="team-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(11, 34, 57, 0.8), rgba(11, 34, 57, 0.8)), url("/hero_background.png")' }}>
        <div className="container">
          <h1 className="page-title animate-fade-in">Meet Our Team</h1>
          <p className="page-subtitle animate-fade-in">Dedicated Professionals Serving You with Integrity</p>
        </div>
      </div>

      {/* Leader Section */}
      <section className="section">
        <div className="container">
          <div className="leader-card" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', 
            gap: '50px', 
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <div className="leader-image-wrapper" style={{ height: '100%', minHeight: '400px' }}>
              <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="leader-info" style={{ padding: '40px' }}>
              <div style={{ marginBottom: '25px' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{leader.role}</span>
                <h2 style={{ fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', color: 'var(--primary-blue)', margin: '10px 0' }}>{leader.name}</h2>
              </div>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px', fontStyle: 'italic' }}>"{leader.bio}"</p>
              
              <div className="leader-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', padding: '12px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--primary-blue)' }}>{leader.experience}</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Real Estate Experience</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', padding: '12px', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--primary-blue)' }}>{leader.clients}</strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Happy Clients Served</span>
                  </div>
                </div>
              </div>

              <div className="education">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-blue)', marginBottom: '15px' }}>
                  <GraduationCap /> Education & Qualifications
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {leader.education.map((edu, i) => (
                    <li key={i} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '6px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%' }}></span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="section bg-light-alt" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Professional Support Team</h2>
          <p className="section-subtitle">A collective of experts dedicated to making your land ownership journey seamless.</p>
          
          <div className="staff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {staff.map((member, index) => (
              <div key={index} className="staff-card" style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)'
              }}>
                <div style={{ height: '300px' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '25px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '5px' }}>{member.name}</h3>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>{member.role}</span>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>{member.bio}</p>
                </div>
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
        .staff-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg) !important;
        }
        @media (max-width: 992px) {
          .leader-card { grid-template-columns: 1fr !important; }
          .leader-image-wrapper { height: 400px !important; }
        }
        @media (max-width: 768px) {
          .page-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Team;
