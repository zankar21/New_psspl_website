import { useParams, Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { products } from "../data/products";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <section className="section product-not-found">
        <div className="container">

          <span className="section-subtitle">
            PRODUCT NOT FOUND
          </span>

          <h1>
            The Product You Are Looking For Is Not Available
          </h1>

          <p>
            Please return to our products page to explore our
            available industrial products and solutions.
          </p>

          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>

        </div>
      </section>
    );
  }

  return (
    <>
      {/* ================= PAGE HERO ================= */}

      <PageHero
        title={product.name}
        subtitle={product.category.toUpperCase()}
      />


      {/* ================= PRODUCT DETAILS ================= */}

      <section className="section product-details">

        <div className="container product-details-grid">


          {/* PRODUCT VISUAL */}

          <div className="product-details-image product-details-placeholder">

            <div className="product-visual-content">

              <span className="product-visual-brand">
                RIBO INDUSTRIES
              </span>

              <h2>
                {product.name}
              </h2>

              <span className="product-visual-category">
                Boiler Pressure Parts
              </span>

            </div>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="product-details-content">

            <span className="product-category">
              {product.category}
            </span>

            <h2>
              {product.name}
            </h2>

            <p className="product-description">
              {product.description}
            </p>


            {/* DISTRIBUTOR INFO */}

            <div className="product-partner-info">

              <span>
                AUTHORIZED DISTRIBUTION
              </span>

              <strong>
                PSSPL — Maharashtra Distributor for RIBO Industries
              </strong>

            </div>


            {/* FEATURES */}

            <div className="product-features-section">

              <h3>
                Key Features
              </h3>

              <ul className="product-features">

                {product.features.map((feature, index) => (

                  <li key={index}>
                    <span className="feature-check">
                      ✓
                    </span>

                    {feature}
                  </li>

                ))}

              </ul>

            </div>


            {/* ACTION BUTTONS */}

            <div className="product-actions">

              <Link
                to={`/contact?product=${product.slug}`}
                className="btn-primary"
              >
                Request a Quote
              </Link>


              <Link
                to="/products"
                className="btn-secondary"
              >
                View All Products
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= APPLICATIONS ================= */}

      <section className="section product-applications-section">

        <div className="container">

          <div className="section-heading-center">

            <span className="section-subtitle">
              INDUSTRIAL APPLICATIONS
            </span>

            <h2>
              Designed for Critical Industrial Operations
            </h2>

            <p>
              Our boiler pressure components support demanding
              operating environments across multiple industries.
            </p>

          </div>


          <div className="product-applications-grid">

            <div className="application-item">
              <span>01</span>
              <h3>Thermal Power Plants</h3>
              <p>
                Boiler systems and power generation units.
              </p>
            </div>


            <div className="application-item">
              <span>02</span>
              <h3>Steel Plants</h3>
              <p>
                Captive power and process boiler applications.
              </p>
            </div>


            <div className="application-item">
              <span>03</span>
              <h3>Cement Plants</h3>
              <p>
                Waste heat recovery and process utilities.
              </p>
            </div>


            <div className="application-item">
              <span>04</span>
              <h3>Sugar & Co-Generation</h3>
              <p>
                High-pressure boilers and captive power systems.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="section product-enquiry-section">

        <div className="container product-enquiry-inner">

          <div>

            <span className="section-subtitle">
              TECHNICAL REQUIREMENTS
            </span>

            <h2>
              Need a Specific Boiler Pressure Component?
            </h2>

            <p>
              Share your technical specifications, drawings or
              requirements with our team for product and supply support.
            </p>

          </div>


          <Link
            to={`/contact?product=${product.slug}`}
            className="btn-primary"
          >
            Send Enquiry
          </Link>

        </div>

      </section>

    </>
  );
}

export default ProductDetails;