import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import { industries } from "../../data/industries";

function IndustriesPreview() {
  return (
    <section className="industries-preview section">

      <div className="container">
        <div className="industries-preview-header">
          <SectionTitle
            subtitle="INDUSTRIES WE SERVE"
            title="Supporting Critical Industrial Operations"
            description="PSSPL supports industrial customers with products, equipment, engineering solutions and site services across critical sectors."
          />

          <Link to="/industries" className="text-link">
            Explore All Industries <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="industries-grid">

          {industries.map((industry) => (

            <div
              className="industry-card"
              key={industry.id}
            >

              <div className="industry-number">
                0{industry.id}
              </div>

              <h3>{industry.name}</h3>

              <p>
                {industry.shortDescription}
              </p>

              <Link
                to={`/industries/${industry.slug}`}
                className="industry-link"
              >
                Explore Industry <span aria-hidden="true">→</span>
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustriesPreview;
