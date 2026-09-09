import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">

      <div className="container cta-container">

        <div>

          <p>
            LET'S DISCUSS YOUR REQUIREMENTS
          </p>

          <h2>
            Looking for Reliable Industrial Engineering Solutions?
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