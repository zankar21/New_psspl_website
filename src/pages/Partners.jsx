import { Link } from "react-router-dom";

function Partners() {
  const featuredPartner = {
    name: "RIBO Industries",
    role: "Maharashtra Distributor — Boiler Pressure Parts",
    description:
      "PSSPL holds the Maharashtra distributorship for RIBO Industries, supplying high-pressure boiler components to power generation and process industries across the state."
  };

  const principals = [
  {
    name: "Bharat Bijlee",
    role: "Service & Maintenance Products",
    description:
      "Service and maintenance products supporting industrial electrical and mechanical systems."
  },
  {
    name: "Electrotherm India Ltd",
    role: "Transformer Division",
    description:
      "Transformers and related electrical equipment for industrial and power applications."
  },
  {
    name: "Astral Pipes",
    role: "Industrial Grade Piping",
    description:
      "Industrial-grade piping solutions for a range of process and utility applications."
  },
  {
    name: "Neeco Engineering Servicing Pvt. Ltd.",
    role: "Engineering & Servicing",
    description:
      "Engineering and servicing support for industrial operations."
  },
  {
    name: "Hydro Care Engineers Pvt. Ltd.",
    role: "Engineering & Servicing",
    description:
      "Specialized engineering and maintenance services."
  },
  {
    name: "Paharpur Cooling Towers Ltd.",
    role: "Cooling Tower Systems",
    description:
      "Cooling tower systems and related industrial equipment."
  },
  {
    name: "Marsh Automation Pvt Ltd",
    role: "Industrial Automation",
    description:
      "Industrial automation solutions built on German technology (emtork)."
  },
  {
    name: "Ion Exchange India Ltd.",
    role: "Water & Environment Solutions",
    description:
      "Water treatment and environmental solutions for industrial applications."
  }
];

  const strategicPartners = [
    {
      name: "Babu Enterprises",
      role: "Strategic Business Partner"
    },
    {
      name: "ASMI Engineering",
      role: "Strategic Business Partner"
    }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <span className="hero-subtitle">
            OUR NETWORK
          </span>
          <h1>Principals & Partners</h1>
          <p>
            PSSPL works through a network of trusted principals,
            manufacturers and strategic partners to deliver reliable
            industrial products, spare parts and engineering solutions.
          </p>
        </div>
      </section>

      {/* FEATURED PARTNER */}
      <section className="section featured-partner-section">
        <div className="container">

          <span className="section-subtitle">
            FEATURED PARTNER
          </span>

          <div className="featured-partner-card">

            <div className="featured-partner-content">

              <h2>{featuredPartner.name}</h2>

              <span className="featured-partner-role">
                {featuredPartner.role}
              </span>

              <p>{featuredPartner.description}</p>

              <Link to="/products" className="btn-primary">
                View Boiler Pressure Parts
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* PRINCIPALS */}
      <section className="section principals-section">
        <div className="container">

          <span className="section-subtitle">
            PRODUCT & TECHNOLOGY PRINCIPALS
          </span>

          <h2>Our Principals</h2>

          <div className="principals-detail-grid">

            {principals.map((principal) => (

              <div
                className="principal-detail-card"
                key={principal.name}
              >
                <h3>{principal.name}</h3>

                <span className="principal-role">
                  {principal.role}
                </span>

                <p>{principal.description}</p>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* STRATEGIC PARTNERS */}
      <section className="section strategic-partners-section">
        <div className="container">

          <span className="section-subtitle">
            STRATEGIC BUSINESS PARTNERS
          </span>

          <h2>Business Partners</h2>

          <div className="strategic-grid">

            {strategicPartners.map((partner) => (

              <div
                className="strategic-card"
                key={partner.name}
              >
                <h3>{partner.name}</h3>
                <p>{partner.role}</p>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section partners-cta-section">
        <div className="container partners-cta-inner">
          <h2>Looking to Partner With PSSPL?</h2>
          <p>
            Get in touch to discuss supply, distribution or
            engineering partnership opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Partners;