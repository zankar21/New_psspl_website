import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import { industries } from "../data/industries";
import { services } from "../data/services";

const technicalServicePoints = [
  "Ultrasonic thickness measurement",
  "Pipeline thickness survey",
  "Structured field-data collection",
  "Survey documentation and reporting"
];

const supportStages = [
  {
    number: "01",
    title: "Requirement Understanding",
    description:
      "Review the client’s operational, maintenance or project requirement."
  },
  {
    number: "02",
    title: "Scope Coordination",
    description:
      "Coordinate the required service scope, resources and execution needs."
  },
  {
    number: "03",
    title: "Planning",
    description:
      "Prepare for materials, manpower, site requirements and execution coordination as applicable."
  },
  {
    number: "04",
    title: "Site Execution",
    description:
      "Carry out the agreed industrial work according to the defined scope."
  },
  {
    number: "05",
    title: "Completion & Documentation",
    description:
      "Support completion, reporting and required project documentation."
  }
];

function Services() {
  return (
    <>
      <PageHero
        title="Industrial Services"
        artworkSrc="/images/services-hero.webp"
      />

      <section className="section services-intro">
        <div className="container">
          <SectionTitle
            subtitle="OUR CAPABILITIES"
            title="Industrial Support Beyond Product Supply"
            description="PSSPL supports industrial clients with execution-oriented services for project, maintenance and operational requirements. Our service capabilities span fabrication, electrical, civil, erection, inspection and site-support activities."
          />
        </div>
      </section>

      <section className="section services-core">
        <div className="container">
          <SectionTitle
            subtitle="CORE INDUSTRIAL SERVICES"
            title="Practical Support for Industrial Requirements"
          />

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.id}>
                  <div className="service-card-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <span className="service-card-category">{service.category}</span>
                  <h3>{service.name}</h3>
                  <p>{service.shortDescription}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services-technical">
        <div className="container services-technical-grid">
          <div>
            <span className="section-subtitle">FIELD-BASED TECHNICAL SUPPORT</span>
            <h2>Inspection & Technical Field Services</h2>
            <p>
              PSSPL supports industrial condition-assessment activities through
              field inspection, ultrasonic thickness measurement, systematic data
              collection and technical reporting.
            </p>
          </div>

          <ul className="services-technical-list">
            {technicalServicePoints.map((point) => (
              <li key={point}>
                <span aria-hidden="true">—</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section services-process">
        <div className="container">
          <SectionTitle
            subtitle="HOW WE WORK"
            title="From Requirement to Site Support"
          />

          <ol className="services-process-grid">
            {supportStages.map((stage) => (
              <li className="services-process-card" key={stage.number}>
                <span className="services-process-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section services-industries">
        <div className="container">
          <div className="services-industries-heading">
            <SectionTitle
              subtitle="INDUSTRIES SUPPORTED"
              title="Industrial Sectors We Support"
            />
            <Link to="/industries" className="services-text-link">
              Explore Industries <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="services-industries-grid">
            {industries.map((industry) => (
              <Link
                className="services-industry-link"
                key={industry.slug}
                to={`/industries/${industry.slug}`}
              >
                <span>{industry.name}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container services-cta-inner">
          <div>
            <span className="section-subtitle">DISCUSS YOUR REQUIREMENT</span>
            <h2>Need Support for an Industrial Project or Maintenance Requirement?</h2>
            <p>
              Share your service requirement with PSSPL and our team can discuss
              the scope and next steps.
            </p>
          </div>

          <div className="services-cta-actions">
            <Link to="/contact" className="btn-primary">
              Discuss Your Requirement
            </Link>
            <Link to="/products" className="btn-outline">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
