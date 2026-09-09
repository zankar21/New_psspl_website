import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="section about-preview">

      <div className="container about-grid">

        <div className="about-image">

          <div className="about-image-placeholder">
            PSSPL INDUSTRIAL OPERATIONS
          </div>

        </div>


        <div className="about-content">

          <span className="section-subtitle">
            ABOUT PAWANSSIDHDHI SUPPLIER PVT LTD
          </span>

          <h2>
            Your Reliable Partner for Industrial Supply & Solutions
          </h2>

          <p>
            Pawanssiddhi Supplier Pvt Ltd (PSSPL) is an
            industrial supply and engineering solutions company
            supporting power, steel, cement, mining and other
            critical industrial sectors.
          </p>

          <p>
            Through our strategic partnerships and industry
            network, we provide industrial products, spare parts,
            equipment and engineering support for projects,
            maintenance and operational requirements.
          </p>


          <div className="about-highlights">

            <div>
              <strong>Industrial</strong>
              <span>Products & Spares</span>
            </div>

            <div>
              <strong>Engineering</strong>
              <span>Solutions & Projects</span>
            </div>

            <div>
              <strong>Strategic</strong>
              <span>Industry Partnerships</span>
            </div>

          </div>


          <Link
            to="/about"
            className="btn-primary"
          >
            Learn More About PSSPL
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;