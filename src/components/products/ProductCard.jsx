import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image">
        PRODUCT IMAGE
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>
          {product.shortDescription}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="product-link"
        >
          Learn More →
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;