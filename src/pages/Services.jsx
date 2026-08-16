import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Map, 
  FileCheck, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MapPin
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesData = [
    {
      id: "land-sales",
      icon: <Map size={32} className="gold-icon" />,
      tag: "Core Offering",
      title: "Titled Land Sales & Estate Development",
      subtitle: "Private Mailo, Freehold, and Kabaka Land across 40+ Estates",
      description: "We provide genuine, litigation-free land parcels tailored for immediate residential development, farming, or long-term capital preservation. Every titled plot comes with authentic registry proof and physically opened access roads.",
      highlights: [
        "Private Mailo with ready certificate of title",
        "Freehold titles with permanent ownership in perpetuity",
        "Customary and Kabaka land with verified cultural and clan lineage",
        "Standard 50 × 100 ft plot dimensions with physical deed corner markers",
        "Direct access roads graded and connected to public transport routes"
      ],
      ctaText: "Explore Estate Stock",
      ctaLink: "/properties"
    },
    {
      id: "land-surveying",
      icon: <Compass size={32} className="gold-icon" />,
      tag: "Technical Precision",
      title: "Cadastral Land Surveying & Boundary Demarcation",
      subtitle: "Licensed Geomatics & Boundary Opening Services",
      description: "Boundary disputes in Uganda arise from imprecise estimations. Our registered surveyors deploy modern GPS and total station equipment to verify coordinates, confirm cadastral boundaries, and plant official concrete boundary markers.",
      highlights: [
        "Official boundary opening with neighboring land verification",
        "Cadastral surveying and deed plan production",
        "Subdivision and mutation of large acreage into standard residential plots",
        "Topographical surveys for architectural and drainage planning",
        "Beacon replacement and physical boundary dispute resolution"
      ],
      ctaText: "Book Surveyor Inspection",
      ctaLink: "/contact"
    },
    {
      id: "title-processing",
      icon: <FileCheck size={32} className="gold-icon" />,
      tag: "Legal Security",
      title: "Land Title Processing & Ministry Searches",
      subtitle: "Seamless Documentation & Title Transfer Execution",
      description: "We handle the bureaucratic complexity of the Ministry of Lands, Housing and Urban Development. From conducting official computerized title searches (NLIS) to drafting transfer forms and obtaining the final white page in your name.",
      highlights: [
        "Official Ministry of Lands (NLIS) title verification and search reports",
        "Drafting and witnessing legal sales agreements by seasoned advocates",
        "Payment of stamp duty and capital transfer fees clearance",
        "Processing of mutation forms and individual plot title issuance",
        "Caveat registration and removal for secure ownership preservation"
      ],
      ctaText: "Request Title Assistance",
      ctaLink: "/contact"
    },
    {
      id: "financing",
      icon: <CreditCard size={32} className="gold-icon" />,
      tag: "Financial Accessibility",
      title: "Flexible 4-Month Payment Plans",
      subtitle: "Structured Installments with 0% Hidden Interest",
      description: "We believe land ownership should not be reserved only for full-cash buyers. Excellent Spirit provides structured in-house installment plans with an initial 50% deposit and transparent 4-month repayment terms.",
      highlights: [
        "50% initial commitment allows you to commence boundary fencing immediately",
        "Even monthly balance split across 4 consecutive months",
        "Zero interest rate penalties and zero hidden facilitation charges",
        "Full support for commercial bank and SACCO property financing packages",
        "Transparent written receipts and financial statement reconciliation"
      ],
      ctaText: "Calculate Installments",
      ctaLink: "/"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between Private Mailo and Freehold land in Uganda?",
      answer: "Private Mailo is the most common and secure land tenure in Buganda / Central Uganda, offering indefinite ownership rights registered under the Registration of Titles Act with ready title deeds. Freehold land also offers absolute ownership in perpetuity and is common in Mukono, Wakiso, and other regions. Both are safe and fully transferable."
    },
    {
      question: "How do I verify that a land plot is genuinely owned by Excellent Spirit Property Masters?",
      answer: "Before paying any money, we provide you with the duplicate title reference number and copy of the deed plan. You are encouraged to conduct an independent title search at the Ministry of Lands Zonal Office (MZO) or through your own trusted advocate. We also provide our official corporate certificate of registration (Reg No. 80020003559554)."
    },
    {
      question: "What are the standard plot measurements across your estates?",
      answer: "Our standard residential plots measure 50 by 100 feet (equivalent to approximately 0.114 acres / 464 square meters), which is the standard size for a spacious 3-4 bedroom family home with parking, compound, and garden. Commercial and larger 100x100ft plots are also available."
    },
    {
      question: "How does the 4-month installment payment plan work?",
      answer: "You deposit 50% of the total plot cost upon signing the legal sale agreement. The remaining 50% balance is divided into 4 equal monthly installments. Once the final installment is cleared, we immediately initiate the title transfer process into your name."
    },
    {
      question: "Are physical site visits free of charge?",
      answer: "Yes, site inspections are conducted free of charge from Monday to Saturday departing from our head office at Daaki House Makerere. We provide company transportation to and from the estate locations."
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="page-hero-eyebrow">Comprehensive Land Solutions</span>
            <h1 className="page-hero-title">Land Sales, Cadastral Surveying & Title Processing</h1>
            <p className="page-hero-desc">
              End-to-end real estate expertise designed to safeguard your investment, verify physical boundaries, and eliminate administrative friction in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Services List (Editorial Split Cards) */}
      <section className="section">
        <div className="container">
          <div className="services-editorial-stack">
            {servicesData.map((service, index) => (
              <div key={service.id} className="service-editorial-row" id={service.id}>
                <div className="service-editorial-card">
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      {service.icon}
                    </div>
                    <div>
                      <span className="service-tag-badge">{service.tag}</span>
                      <h2 className="service-title">{service.title}</h2>
                      <span className="service-subtitle">{service.subtitle}</span>
                    </div>
                  </div>

                  <p className="service-desc-text">{service.description}</p>

                  <div className="service-highlights-box">
                    <h4>Key Deliverables & Standards:</h4>
                    <ul className="service-checklist">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle2 size={18} className="gold-icon flex-shrink" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-footer">
                    <Link to={service.ctaLink} className="btn btn-primary">
                      <span>{service.ctaText}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <a 
                      href={`https://wa.me/256777367716?text=Hello%20Excellent%20Spirit,%20I%20would%20like%20inquiry%20regarding%20${encodeURIComponent(service.title)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline"
                    >
                      <MessageCircle size={16} />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-surface">
        <div className="container-narrow">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Frequently Asked Questions
            </span>
            <h2 className="section-title">Common Questions on Buying Land in Uganda</h2>
            <p className="section-desc">
              Straightforward answers to the most crucial questions land buyers and diaspora investors ask about ownership, verification, and payments.
            </p>
          </div>

          <div className="faq-accordion-stack">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-card ${openFaq === index ? 'is-open' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section">
        <div className="container">
          <div className="consultation-banner">
            <div>
              <span className="section-eyebrow" style={{ color: 'var(--c-gold-light)' }}>
                Direct Professional Support
              </span>
              <h2>Need Title Processing or Surveying Assistance?</h2>
              <p>
                Whether you want to verify an existing title, open boundaries on inherited land, or purchase a newly surveyed plot, our technical team is ready to assist.
              </p>
            </div>
            <div className="consultation-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                <span>Book Office Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+256777367716" className="btn btn-outline-white btn-lg">
                <span>Call Hotline: +256 777 367716</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
