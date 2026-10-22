import { Link } from "react-router-dom";
import { getPrincipalBySlug } from "../../data/principals";

function ProductCard({ product }) {
  const principal = getPrincipalBySlug(product.principalSlug);

  return (
    <article className="product-card">

      <div className={`product-image${product.image ? " product-image--asset" : " product-image-placeholder"}`}>

        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <>
            {principal && (
              <span className="product-image-label">
                {principal.name}
              </span>
            )}

            <span className="product-image-name">
              {product.name}
            </span>
          </>
        )}

      </div>


      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>

        <p>
          {product.shortDescription}
        </p>


        <Link
          to={`/products/${product.slug}`}
          className="product-link"
          aria-label={`View ${product.name} details`}
        >
          Explore Product →
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;
