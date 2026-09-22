import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { products } from "../data/products";
import {
  getPrincipalBySlug,
  getPrincipalRelationship
} from "../data/principals";

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const principal = product ? getPrincipalBySlug(product.principalSlug) : null;

  if (!product) {
    return (
      <section className="section product-not-found">
        <div className="container">
          <span className="section-subtitle">PRODUCT NOT FOUND</span>
          <h1>The Product You Are Looking For Is Not Available</h1>
          <p>
            Please return to our products page to explore our available
            industrial products and solutions.
          </p>
          <Link to="/products" className="btn-primary">Back to Products</Link>
        </div>
      </section>
    );
  }

  const hasFeatures = product.features?.length > 0;
  const hasHighlights = product.technicalHighlights?.length > 0;
  const hasSpecifications = product.specifications?.length > 0;
  const hasMaterials = product.materials?.length > 0;
  const hasApplications = product.applications?.length > 0;
  const hasQualityInformation = product.qualityChecks?.length > 0 || product.standards?.length > 0;
  const enquiryRoute = `/contact?product=${product.slug}`;

  return (
    <>
      <section className="product-page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.name }
            ]}
          />

          <div className="product-hero-grid">
            <div className="product-hero-image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <span>{product.name}</span>
              )}
            </div>

            <div className="product-hero-content">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <p>{product.shortDescription || product.description}</p>

              {principal && (
                <div className="product-hero-principal">
                  <span>Principal</span>
                  <strong>{principal.name}</strong>
                  <p>PSSPL: {getPrincipalRelationship(principal)}</p>
                </div>
              )}

              <div className="product-hero-actions">
                <Link to={enquiryRoute} className="btn-primary">
                  Request Technical Enquiry
                </Link>
                {principal?.detailRoute && (
                  <Link to={principal.detailRoute} className="btn-secondary">
                    View {principal.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.overview && (
        <section className="section product-overview-section">
          <div className="container product-copy-container">
            <span className="section-subtitle">PRODUCT OVERVIEW</span>
            <h2>Product Overview</h2>
            <p>{product.overview}</p>
          </div>
        </section>
      )}

      {hasFeatures && (
        <section className="section product-features-section">
          <div className="container">
            <span className="section-subtitle">PRODUCT FEATURES</span>
            <h2>Key Features</h2>
            <ul className="product-features">
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </section>
      )}

      {hasHighlights && (
        <section className="section product-highlights-section">
          <div className="container">
            <span className="section-subtitle">TECHNICAL INFORMATION</span>
            <h2>Technical Highlights</h2>
            <ul className="product-highlights-grid">
              {product.technicalHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </section>
      )}

      {(hasSpecifications || hasMaterials) && (
        <section className="section product-specifications-section">
          <div className="container product-copy-container">
            <span className="section-subtitle">TECHNICAL INFORMATION</span>
            <h2>Specifications & Materials</h2>

            {hasSpecifications && (
              <dl className="product-specifications-list">
                {product.specifications.map((specification) => (
                  <div key={specification.label}>
                    <dt>{specification.label}</dt>
                    <dd>{specification.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {hasMaterials && (
              <div className="product-materials">
                <h3>Materials</h3>
                <ul>
                  {product.materials.map((material) => <li key={material}>{material}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {hasApplications && (
        <section className="section product-applications-section">
          <div className="container">
            <span className="section-subtitle">APPLICATIONS</span>
            <h2>Applications</h2>
            <ul className="product-applications-grid">
              {product.applications.map((application) => <li key={application}>{application}</li>)}
            </ul>
          </div>
        </section>
      )}

      {hasQualityInformation && (
        <section className="section product-quality-section">
          <div className="container product-copy-container">
            <span className="section-subtitle">VERIFIED PROCESS INFORMATION</span>
            <h2>Quality & Inspection</h2>

            {product.qualityChecks?.length > 0 && (
              <ul className="product-quality-list">
                {product.qualityChecks.map((qualityCheck) => <li key={qualityCheck}>{qualityCheck}</li>)}
              </ul>
            )}

            {product.standards?.length > 0 && (
              <div className="product-standards">
                <h3>Standards</h3>
                <ul>
                  {product.standards.map((standard) => <li key={standard}>{standard}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {principal && (
        <section className="product-principal-strip">
          <div className="container product-principal-strip-inner">
            <div>
              <span className="section-subtitle">PRINCIPAL RELATIONSHIP</span>
              <h2>{principal.name}</h2>
              <p>Pawanssiddhi Supplier Pvt Ltd: {getPrincipalRelationship(principal)}</p>
            </div>
            {principal.detailRoute && (
              <Link to={principal.detailRoute} className="btn-secondary">
                View {principal.name}
              </Link>
            )}
          </div>
        </section>
      )}

      <section className="section product-enquiry-section">
        <div className="container product-enquiry-inner">
          <div>
            <span className="section-subtitle">DISCUSS YOUR REQUIREMENT</span>
            <h2>Need Technical Information or Product Support?</h2>
            <p>
              Contact Pawanssiddhi Supplier Pvt Ltd for technical information,
              product availability or assistance with your requirement.
            </p>
          </div>
          <Link to={enquiryRoute} className="btn-primary">
            Request Technical Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
