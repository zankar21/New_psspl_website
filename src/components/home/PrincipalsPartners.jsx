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
      role: "Service & Maintenance Products",
      logo: "/vendor-logos/bharat-bijlee.png"
    },
    {
      name: "Electrotherm India Ltd",
      role: "Transformer Division",
      logo: "/vendor-logos/electrotherm.png"
    },
    {
      name: "Astral Pipes",
      role: "Industrial Grade Piping",
      logo: "/vendor-logos/astral.png"
    },
    {
      name: "Neeco Engineering Servicing Pvt. Ltd.",
      role: "Engineering & Servicing",
      logo: "/vendor-logos/neeco.png"
    },
    {
      name: "Hydro Care Engineers Pvt. Ltd.",
      role: "Engineering & Servicing",
      logo: "/vendor-logos/hydrocare.png"
    },
    {
      name: "Paharpur Cooling Towers Ltd.",
      role: "Cooling Tower Systems",
      logo: "/vendor-logos/paharpur.png"
    },
    {
      name: "Marsh Automation Pvt Ltd",
      role: "Industrial Automation (German Technology)",
      logo: "/vendor-logos/marsh.png"
    },
    {
      name: "Ion Exchange India Ltd.",
      role: "Water & Environment Solutions",
      logo: "/vendor-logos/ionexchange.png"
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

        <div className="partners-scroll">

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

              {partner.logo && (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
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