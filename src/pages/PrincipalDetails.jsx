import { Link, useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionNav from "../components/common/SectionNav";
import ProductCard from "../components/products/ProductCard";
import NotFound from "./NotFound";
import { products } from "../data/products";
import {
  getPrincipalBySlug,
  getPrincipalRelationship
} from "../data/principals";

function PrincipalDetails() {
  const { slug } = useParams();
  const principal = getPrincipalBySlug(slug);

  if (!principal) {
    return <NotFound />;
  }

  const principalProducts = principal.productSlugs
    .map((productSlug) => products.find((product) => product.slug === productSlug))
    .filter(Boolean);
  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Partners", to: "/partners" },
    { label: principal.name }
  ];

  return (
    <>
      <PageHero title={principal.name} subtitle={getPrincipalRelationship(principal)} artworkSrc={principal.heroImage} breadcrumbs={breadcrumbs} />
      <SectionNav items={[{ id: "principal-overview", label: "Dealership" }, { id: "principal-products", label: "Product Portfolio" }]} />

      <section className="section principal-relationship-section" id="principal-overview">
        <div className="container principal-relationship-grid">
          <div className="principal-logo-panel">
            <img src={principal.logo} alt={`${principal.name} logo`} />
          </div>

          <div className="principal-relationship-content">
            <span className="section-subtitle">
              PAWANSSIDDHI × {principal.name.toUpperCase()}
            </span>
            <h2>{principal.name}</h2>
            <p className="principal-relationship-badge">
              {getPrincipalRelationship(principal)}
            </p>
            <p>
              Pawanssiddhi Supplier Pvt Ltd is the {getPrincipalRelationship(principal)}
              {" "}for this {principal.productCategories.join(" & ").toLowerCase()} portfolio,
              supporting product enquiries and coordination in {principal.territory}.
            </p>
          </div>
        </div>
      </section>

      <section className="section principal-portfolio-section" id="principal-products">
        <div className="container">
          <div className="principal-portfolio-heading">
            <span className="section-subtitle">{principal.name.toUpperCase()}</span>
            <h2>{principal.productCategories.join(" & ")} Portfolio</h2>
            <p>
              Explore the current {principal.name} portfolio available through
              Pawanssiddhi Supplier Pvt Ltd.
            </p>
          </div>

          <div className="products-grid principal-products-grid">
            {principalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section principal-enquiry-section">
        <div className="container principal-enquiry-inner">
          <div>
            <span className="section-subtitle">TECHNICAL ENQUIRY</span>
            <h2>Need {principal.productCategories.join(" & ")} for Your Project?</h2>
            <p>
              Contact Pawanssiddhi Supplier Pvt Ltd for product enquiries and
              coordination for {principal.name} {principal.productCategories.join(" & ").toLowerCase()}
              {" "}in {principal.territory}.
            </p>
          </div>

          <Link to="/contact" className="btn-primary">
            Send Technical Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}

export default PrincipalDetails;
