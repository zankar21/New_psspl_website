import { Link } from "react-router-dom";
import { getPrincipalBySlug } from "../../data/principals";

function ProductCard({ product }) {
  const principal = getPrincipalBySlug(product.principalSlug);

  return (
    <article className="product-card">

      <div className={`product-image${product.image ? " product-image--asset" : " product-image-placeholder"}`}>

        {product.image ? (
          <img src={product.image} alt={product.name} />
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
