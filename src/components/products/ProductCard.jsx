import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image product-image-placeholder">

        <span className="product-image-label">
          RIBO
        </span>

        <span className="product-image-name">
          {product.name}
        </span>

      </div>


      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.name}
        </h3>

        <p>
          {product.shortDescription}
        </p>


        <Link
          to={`/products/${product.slug}`}
          className="product-link"
        >
          Explore Product →
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;