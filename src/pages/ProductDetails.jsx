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
      <div className="container section">
        <h1>Product Not Found</h1>

        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.category.toUpperCase()}
      />

      <section className="section product-details">

        <div className="container product-details-grid">

          {/* Product Image */}

          <div className="product-details-image">
            PRODUCT IMAGE
          </div>


          {/* Product Information */}

          <div className="product-details-content">

            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className="product-description">
              {product.description}
            </p>


            <h3>Key Features</h3>

            <ul className="product-features">

              {product.features.map((feature, index) => (
                <li key={index}>
                  ✓ {feature}
                </li>
              ))}

            </ul>


            <Link
              to="/contact"
              className="btn-primary"
            >
              Request a Quote
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default ProductDetails;