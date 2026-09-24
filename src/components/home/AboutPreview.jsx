import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="section about-preview">

      <div className="container about-grid">

        <div className="about-image">
          <img
            src="/images/home-about-industrial-operations.webp"
            alt="PSSPL industrial engineering and project support"
          />

        </div>


        <div className="about-content">

          <span className="section-subtitle">
            ABOUT PAWANSSIDDHI SUPPLIER PVT LTD
          </span>

          <h2>
            Industrial Supply, Engineering & Project Support
          </h2>

          <p>
            Pawanssiddhi Supplier Pvt Ltd (PSSPL) supports industrial customers
            with products, spare parts, equipment and engineering solutions for
            operational, maintenance and project requirements.
          </p>

          <p>
            Through manufacturer relationships, strategic partnerships and site
            execution capabilities, we support critical industries including
            power, steel, cement and mining.
          </p>


          <div className="about-highlights">

            <div>
              <strong>Industrial Products</strong>
              <span>Equipment, Components &amp; Spares</span>
            </div>

            <div>
              <strong>Industrial Services</strong>
              <span>Fabrication, Erection, Inspection &amp; Site Support</span>
            </div>

            <div>
              <strong>Industry Network</strong>
              <span>Manufacturers &amp; Strategic Partners</span>
            </div>

          </div>


          <div className="about-actions">
            <Link to="/about" className="btn-primary">
              About PSSPL
            </Link>

            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;
