import { Link, useParams } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import CTA from "../components/home/CTA";
import { industries } from "../data/industries";

function IndustryDetails() {
  const { slug } = useParams();

  const industry = industries.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    return (
      <section className="section industry-not-found">
        <div className="container">
          <span className="industry-category">
            INDUSTRIES
          </span>

          <h1>Industry Not Found</h1>

          <p>
            The industry page you are looking for is not available.
          </p>

          <Link to="/industries" className="btn-primary">
            Back to Industries
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title={industry.name}
        artworkSrc={industry.heroImage}
      />

      <section className="section industry-details">
        <div className="container">
          <div className="industry-details-intro">
            <span className="industry-category">
              {industry.category}
            </span>

            <h2>Industrial Support for {industry.name}</h2>

            <p className="industry-description">
              {industry.description}
            </p>
          </div>

          {industry.hasDirectExperience && (
            <section
              className="industry-experience"
              aria-labelledby={`experience-${industry.slug}`}
            >
              <div className="industry-section-heading">
                <span className="industry-section-eyebrow">
                  PSSPL EXPERIENCE
                </span>

                <h3 id={`experience-${industry.slug}`}>
                  {industry.experienceTitle}
                </h3>

                <p>
                  {industry.experienceDescription}
                </p>
              </div>

              <div className="industry-experience-grid">
                {industry.experienceOrganizations.map((organization) => (
                  <div
                    className="industry-experience-item"
                    key={organization}
                  >
                    <span
                      className="industry-experience-mark"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <span>{organization}</span>
                  </div>
                ))}
              </div>

              <p className="industry-experience-note">
                The experience listed above relates to PSSPL&apos;s direct
                industrial work and is separate from products offered through
                current manufacturer and principal relationships.
              </p>
            </section>
          )}

          <section
            className="industry-solutions"
            aria-labelledby={`solutions-${industry.slug}`}
          >
            <div className="industry-section-heading">
              <span className="industry-section-eyebrow">
                PRODUCTS &amp; SOLUTIONS
              </span>

              <h3 id={`solutions-${industry.slug}`}>
                Relevant Products &amp; Solutions
              </h3>

              <p>
                Explore products and supply solutions relevant to the
                operational and maintenance requirements of this sector.
              </p>
            </div>

            <div className="industry-solutions-grid">
              {industry.solutions.map((solution) => {
                if (solution.route) {
                  return (
                    <Link
                      key={solution.name}
                      to={solution.route}
                      className="industry-solution-card industry-solution-link"
                    >
                      <span>{solution.name}</span>
                      <span
                        className="industry-solution-arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={solution.name}
                    className="industry-solution-card"
                  >
                    <span>{solution.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="industry-enquiry">
            <div>
              <span className="industry-section-eyebrow">
                INDUSTRIAL REQUIREMENTS
              </span>

              <h3>Discuss Your Requirement</h3>

              <p>
                Share your product, spare-part or project requirement with
                PSSPL for technical and commercial coordination.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn-primary industry-enquiry-button"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default IndustryDetails;
