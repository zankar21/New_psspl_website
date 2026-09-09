import { Link } from "react-router-dom";

function IndustryCard({ industry, index }) {
  return (
    <article className="industry-page-card">

      <span className="industry-card-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="industry-category">
        {industry.category}
      </span>

      <h3>{industry.name}</h3>

      <p>{industry.shortDescription}</p>

      <Link
        to={`/industries/${industry.slug}`}
        className="industry-link"
      >
        Explore Industry →
      </Link>

    </article>
  );
}

export default IndustryCard;