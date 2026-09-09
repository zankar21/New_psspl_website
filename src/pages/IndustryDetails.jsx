import { useParams, Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import { industries } from "../data/industries";

function IndustryDetails() {
  const { slug } = useParams();

  const industry = industries.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    return (
      <div className="container section">
        <h1>Industry Not Found</h1>

        <Link to="/industries" className="btn-primary">
          Back to Industries
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={industry.name}
        subtitle={industry.category}
      />

      <section className="section industry-details">

        <div className="container industry-details-grid">

          <div className="industry-details-image">
            INDUSTRY IMAGE
          </div>


          <div className="industry-details-content">

            <span className="industry-category">
              {industry.category}
            </span>

            <h2>{industry.name}</h2>

            <p className="industry-description">
              {industry.description}
            </p>

            <h3>Our Applications</h3>

            <ul className="industry-applications">

              {industry.applications.map((application, index) => (
                <li key={index}>
                  ✓ {application}
                </li>
              ))}

            </ul>

            <Link
              to="/contact"
              className="btn-primary"
            >
              Discuss Your Requirement
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default IndustryDetails;