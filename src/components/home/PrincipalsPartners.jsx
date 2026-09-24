import { Link } from "react-router-dom";
import {
  principals,
  industryRelationships,
  strategicPartners,
  getPrincipalRelationship
} from "../../data/principals";
import { products } from "../../data/products";

function PrincipalsPartners() {
  return (
    <section className="section principals-partners">
      <div className="container">
        <div className="principals-header">
          <span className="section-subtitle">OUR PRINCIPALS</span>
          <h2>Manufacturer Partnerships</h2>
          <p>
            PSSPL works with established manufacturers to expand the range of
            industrial products and solutions available to customers across
            Maharashtra.
          </p>
        </div>

        <div className="authorized-principals-grid">
          {principals.map((principal) => {
            const principalProducts = principal.productSlugs
              .map((productSlug) => products.find((product) => product.slug === productSlug))
              .filter(Boolean);

            return (
              <article className="authorized-principal-card" key={principal.slug}>
                <div className="authorized-principal-logo">
                  <img src={principal.logo} alt={principal.name} />
                </div>

                <div className="authorized-principal-content">
                  <span className="principal-category">MANUFACTURER / PRINCIPAL</span>
                  <h3>{principal.name}</h3>
                  <p className="principal-relationship">
                    PSSPL: {getPrincipalRelationship(principal)}
                  </p>
                  <p>
                    Boiler pressure components for power generation and
                    process-industry applications.
                  </p>

                  <div className="principal-product-tags" aria-label="Representative products">
                    {principalProducts.map((product) => (
                      <span key={product.slug}>{product.name}</span>
                    ))}
                  </div>

                  <Link to={principal.detailRoute} className="btn-primary">
                    Explore RIBO Products
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="industry-relationships">
          <h3>Industry Partners &amp; Suppliers</h3>

          <div className="partners-grid">
            {industryRelationships.map((relationship) => (
              <article className="partner-card" key={relationship.name}>
                {relationship.logo && (
                  <div className="partner-logo-area">
                    <img
                      src={relationship.logo}
                      alt={relationship.name}
                      className="partner-logo"
                    />
                  </div>
                )}

                <h4>{relationship.name}</h4>
                <p>{relationship.role}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="strategic-partners-preview">
          <h3>Strategic Partners</h3>

          <div className="strategic-partners-list">
            {strategicPartners.map((partner) => (
              <article key={partner.name}>
                <h4>{partner.name}</h4>
                <p>{partner.role}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="principals-cta">
          <Link to="/partners" className="text-link">
            View Full Partner Network →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PrincipalsPartners;
