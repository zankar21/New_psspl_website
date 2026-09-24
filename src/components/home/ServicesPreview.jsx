import { Link } from "react-router-dom";
import { services } from "../../data/services";

function ServicesPreview() {
  return (
    <section className="section services-preview">
      <div className="container services-preview-grid">
        <div className="services-preview-visual" aria-hidden="true">
          <div className="services-preview-visual-accent" />
          <div className="services-preview-visual-icons">
            {services.slice(0, 3).map((service) => {
              const Icon = service.icon;

              return (
                <span className="services-preview-visual-icon" key={service.slug}>
                  <Icon />
                </span>
              );
            })}
          </div>
        </div>

        <div className="services-preview-content">
          <span className="section-subtitle">INDUSTRIAL SERVICES</span>
          <h2>Execution &amp; Site Support for Industrial Requirements</h2>
          <p>
            PSSPL supports industrial projects, maintenance and operational
            requirements through fabrication, electrical, civil, erection,
            inspection and site-support services.
          </p>

          <div className="services-preview-list">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className={`services-preview-item${
                    service.slug === "inspection-ut-thickness-survey"
                      ? " services-preview-item--inspection"
                      : ""
                  }`}
                  key={service.id}
                >
                  <span className="services-preview-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="services-preview-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{service.name}</h3>
                </article>
              );
            })}
          </div>

          <div className="services-preview-actions">
            <Link to="/services" className="btn-primary">
              Explore Industrial Services
            </Link>
            <Link to="/contact" className="services-preview-link">
              Discuss a Requirement <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
