import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">

      <div className="container cta-container">

        <div>

          <p>
            SUPPLY · PROJECTS · COLLABORATIONS
          </p>

          <h2>
            Industrial Supply & Project Support from PSSPL
          </h2>

        </div>

        <Link
          to="/contact"
          className="btn-primary"
        >
          Contact Our Team
        </Link>

      </div>

    </section>
  );
}

export default CTA;