import { Link } from "react-router-dom";

function PrincipalsPartners() {
  const partners = [
  {
    name: "RIBO Industries",
    role: "Maharashtra Distributor — Boiler Pressure Parts",
    featured: true
  },
  {
    name: "Bharat Bijlee",
    role: "Service & Maintenance Products"
  },
  {
    name: "Electrotherm India Ltd",
    role: "Transformer Division"
  },
  {
    name: "Astral Pipes",
    role: "Industrial Grade Piping"
  },
  {
    name: "Neeco Engineering Servicing Pvt. Ltd.",
    role: "Engineering & Servicing"
  },
  {
    name: "Hydro Care Engineers Pvt. Ltd.",
    role: "Engineering & Servicing"
  },
  {
    name: "Paharpur Cooling Towers Ltd.",
    role: "Cooling Tower Systems"
  },
  {
    name: "Marsh Automation Pvt Ltd",
    role: "Industrial Automation (German Technology)"
  },
  {
    name: "Ion Exchange India Ltd.",
    role: "Water & Environment Solutions"
  },
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
    <section className="section principals-partners">
      <div className="container">

        <div className="principals-header">
          <span className="section-subtitle">
            OUR NETWORK
          </span>

          <h2>
            Principals & Partners
          </h2>

          <p>
            PSSPL works through a network of trusted principals,
            manufacturers and strategic partners to deliver
            reliable industrial products and solutions.
          </p>
        </div>

        <div className="partners-grid">

          {partners.map((partner) => (

            <div
              className={
                partner.featured
                  ? "partner-card partner-card-featured"
                  : "partner-card"
              }
              key={partner.name}
            >

              {partner.featured && (
                <span className="partner-badge">
                  Featured Partner
                </span>
              )}

              <h3>{partner.name}</h3>

              <p>{partner.role}</p>

            </div>

          ))}

        </div>

        <div className="principals-cta">
          <Link
            to="/partners"
            className="text-link"
          >
            View Full Partner Network →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PrincipalsPartners;