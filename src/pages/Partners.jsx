import { Link } from "react-router-dom";
import {
  principals,
  industryRelationships,
  strategicPartners,
  getPrincipalRelationship
} from "../data/principals";
import { products } from "../data/products";

function Partners() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="hero-subtitle">OUR NETWORK</span>
          <h1>Principals & Partners</h1>
          <p>
            PSSPL works through a network of principals, industry
            relationships and strategic partners to deliver industrial
            products, spare parts and engineering solutions.
          </p>
        </div>
      </section>

      <section className="section partners-intro-section">
        <div className="container partners-intro-content">
          <span className="section-subtitle">STRONGER THROUGH COLLABORATION</span>
          <h2>Building Broader Industrial Capabilities Through Partnerships</h2>
          <p>
            Our network supports diverse industrial requirements across power
            generation, steel, cement, mining and other industrial sectors.
          </p>
        </div>
      </section>

      <section className="section featured-partner-section">
        <div className="container">
          <span className="section-subtitle">AUTHORISED PARTNERSHIP</span>

          {principals.map((principal) => {
            const principalProducts = principal.productSlugs
              .map((productSlug) => products.find((product) => product.slug === productSlug))
              .filter(Boolean);

            return (
              <div className="featured-partner-card" key={principal.slug}>
                <div className="featured-partner-visual">
                  <img
                    src={principal.logo}
                    alt={`${principal.name} logo`}
                    className="featured-principal-logo"
                  />
                </div>

                <div className="featured-partner-content">
                  <span className="featured-partner-role">
                    Manufacturer / Principal
                  </span>
                  <h2>{principal.name}</h2>
                  <div className="featured-partner-category">
                    {principal.productCategories.join(" & ")}
                  </div>
                  <span className="featured-partner-role">
                    PSSPL: {getPrincipalRelationship(principal)}
                  </span>
                  <p>{principal.description}</p>

                  <div className="featured-products-tags">
                    {principalProducts.map((product) => (
                      <span key={product.slug}>{product.name}</span>
                    ))}
                  </div>

                  <Link to={principal.detailRoute} className="btn-primary">
                    Explore {principal.name} Products
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section principals-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-subtitle">INDUSTRY RELATIONSHIPS</span>
            <h2>Industry Relationships</h2>
            <p>
              These relationships broaden the industrial products, equipment
              and support available through PSSPL.
            </p>
          </div>

          <div className="principals-detail-grid">
            {industryRelationships.map((relationship, index) => (
              <article className="principal-detail-card" key={relationship.name}>
                <div className="principal-card-top">
                  <span className="principal-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {relationship.logo && (
                  <div className="partner-logo-wrap">
                    <img
                      src={relationship.logo}
                      alt={relationship.name}
                      className="partner-logo"
                    />
                  </div>
                )}

                <h3>{relationship.name}</h3>
                <span className="principal-role">{relationship.role}</span>
                <p>{relationship.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section strategic-partners-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-subtitle">STRATEGIC PARTNERS</span>
            <h2>Strategic Partners</h2>
            <p>
              Our strategic partnerships strengthen capabilities in industrial
              supply, engineering projects and maintenance support.
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
