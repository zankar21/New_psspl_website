import { Link } from "react-router-dom";

function Partners() {
  const featuredPartner = {
    name: "RIBO Industries",
    role: "MAHARASHTRA DISTRIBUTOR",
    category: "Boiler Pressure Parts",
    description:
      "Pawanssiddhi Supplier Pvt Ltd (PSSPL) holds the Maharashtra distributorship for RIBO Industries, supplying high-pressure boiler pressure parts and components to power generation and process industries."
  };

  const principals = [
    {
      name: "Bharat Bijlee",
      role: "Service & Maintenance Products",
      description:
        "Service and maintenance products supporting industrial electrical and mechanical systems."
    },
    {
      name: "Electrotherm India Ltd.",
      role: "Transformer Division",
      description:
        "Transformers and related electrical equipment for industrial and power applications."
    },
    {
      name: "Astral Pipes",
      role: "Industrial Grade Piping",
      description:
        "Industrial-grade piping solutions for process, utility and infrastructure applications."
    },
    {
      name: "Neeco Engineering Servicing Pvt. Ltd.",
      role: "Engineering & Servicing",
      description:
        "Engineering and servicing support for industrial operations and maintenance requirements."
    },
    {
      name: "Hydro Care Engineers Pvt. Ltd.",
      role: "Engineering & Servicing",
      description:
        "Specialized engineering and maintenance solutions for industrial applications."
    },
    {
      name: "Paharpur Cooling Towers Ltd.",
      role: "Cooling Tower Systems",
      description:
        "Cooling tower systems and related thermal management equipment for industrial applications."
    },
    {
      name: "Marsh Automation Pvt. Ltd.",
      role: "Industrial Automation",
      description:
        "Industrial automation solutions including advanced technology-based actuator and automation systems."
    },
    {
      name: "Ion Exchange India Ltd.",
      role: "Water & Environmental Solutions",
      description:
        "Water treatment, process water and environmental solutions for industrial applications."
    }
  ];

  const strategicPartners = [
    {
      name: "Babu Enterprises",
      role: "Strategic Business Partner",
      description:
        "Supporting industrial supply, mechanical projects and power plant maintenance requirements."
    },
    {
      name: "ASMI Engineering",
      role: "Strategic Business Partner",
      description:
        "Supporting electrical engineering, industrial projects and maintenance requirements."
    }
  ];

  return (
    <>
      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">
        <div className="container">
          <span className="hero-subtitle">OUR NETWORK</span>
          <h1>Principals & Partners</h1>
          <p>
            PSSPL works through a network of trusted principals,
            manufacturers and strategic partners to deliver reliable
            industrial products, spare parts and engineering solutions.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="section partners-intro-section">
        <div className="container partners-intro-content">
          <span className="section-subtitle">STRONGER THROUGH COLLABORATION</span>
          <h2>Building Broader Industrial Capabilities Through Partnerships</h2>
          <p>
            Our network of product principals, manufacturers and
            strategic business partners enables PSSPL to support
            diverse industrial requirements across power generation,
            steel, cement, mining and other industrial sectors.
          </p>
        </div>
      </section>

      {/* ================= FEATURED PARTNER ================= */}

      <section className="section featured-partner-section">
        <div className="container">
          <span className="section-subtitle">FEATURED PARTNERSHIP</span>

          <div className="featured-partner-card">
            <div className="featured-partner-visual">
              <div className="featured-partner-logo">
                <span>RIBO</span>
                <small>INDUSTRIES</small>
              </div>
            </div>

            <div className="featured-partner-content">
              <span className="featured-partner-role">{featuredPartner.role}</span>
              <h2>{featuredPartner.name}</h2>
              <div className="featured-partner-category">{featuredPartner.category}</div>
              <p>{featuredPartner.description}</p>

              <div className="featured-products-tags">
                <span>Boiler Panels</span>
                <span>Economiser Coils</span>
                <span>Superheater Coils</span>
                <span>Reheater Coils</span>
                <span>Headers</span>
                <span>Boiler Piping</span>
              </div>

              <Link to="/products" className="btn-primary">
                View Boiler Pressure Parts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPALS ================= */}

      <section className="section principals-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-subtitle">PRODUCT & TECHNOLOGY PRINCIPALS</span>
            <h2>Our Principals</h2>
            <p>
              Our principal network enables us to offer specialized
              industrial products, equipment and technology solutions.
            </p>
          </div>

          <div className="principals-detail-grid">
            {principals.map((principal) => (
              <article className="principal-detail-card" key={principal.name}>
                <div className="principal-card-top">
                  <span className="principal-number">
                    {String(principals.indexOf(principal) + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{principal.name}</h3>
                <span className="principal-role">{principal.role}</span>
                <p>{principal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PARTNERS ================= */}

      <section className="section strategic-partners-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-subtitle">STRATEGIC BUSINESS PARTNERS</span>
            <h2>Business Partners</h2>
            <p>
              Our strategic partnerships strengthen our capabilities
              in industrial supply, engineering projects and
              maintenance support.
            </p>
          </div>

          <div className="strategic-grid">
            {strategicPartners.map((partner) => (
              <article className="strategic-card" key={partner.name}>
                <div className="strategic-icon">P</div>
                <h3>{partner.name}</h3>
                <span>{partner.role}</span>
                <p>{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="section partners-cta-section">
        <div className="container partners-cta-inner">
          <div>
            <span className="section-subtitle">WORK WITH PSSPL</span>
            <h2>Looking to Partner With PSSPL?</h2>
            <p>
              Get in touch to discuss product supply, distribution,
              engineering or industrial partnership opportunities.
            </p>
          </div>

          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Partners;
