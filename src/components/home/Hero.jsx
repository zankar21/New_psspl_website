import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-subtitle">
            INDUSTRIAL SUPPLY & ENGINEERING SOLUTIONS
          </span>

          <h1>
            Reliable Industrial Products,
            <span> Spare Parts & Engineering Solutions</span>
          </h1>

          <p>
            Pawanssiddhi Supplier Pvt Ltd (PSSPL) provides
            industrial products, spare parts, equipment and
            engineering solutions through strategic partnerships
            and a reliable industrial supply network.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="btn-primary"
            >
              Explore Our Solutions
            </Link>

            <Link
              to="/contact"
              className="btn-outline"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;