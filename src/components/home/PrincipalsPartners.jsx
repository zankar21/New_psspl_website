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
          <h2>Authorised Partnerships</h2>
          <p>
            PSSPL collaborates with established manufacturers and industry
            partners to deliver reliable products and engineering solutions for
            critical industrial applications.
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
                  <img src={principal.logo} alt={`${principal.name} logo`} />
                </div>

                <div className="authorized-principal-content">
                  <span className="partner-badge">
                    {getPrincipalRelationship(principal)}
                  </span>

                  <h3>{principal.name}</h3>
                  <p>{principal.description}</p>

                  <div className="principal-product-tags" aria-label="Representative products">
                    {principalProducts.map((product) => (
                      <span key={product.slug}>{product.name}</span>
                    ))}
                  </div>

                  <Link to={principal.detailRoute} className="btn-primary">
                    Explore {principal.name} Products
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="industry-relationships">
          <h3>Industry Relationships</h3>

          <div className="partners-scroll">
            {industryRelationships.map((relationship) => (
              <article className="partner-card" key={relationship.name}>
                {relationship.logo && (
                  <img
                    src={relationship.logo}
                    alt={relationship.name}
                    className="partner-logo"
                  />
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
              <div key={partner.name}>
                <strong>{partner.name}</strong>
                <span>{partner.role}</span>
              </div>
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
