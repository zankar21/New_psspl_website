import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">


          {/* COMPANY */}

          <div className="footer-company">

            <Link to="/" className="footer-logo">
              <span className="footer-brand-name">PAWANSSIDDHI</span>
              <span className="footer-brand-subtitle">SUPPLIER PVT LTD</span>
            </Link>

            <p>
              Industrial products, equipment, spare parts and engineering
              solutions for critical industrial requirements.
            </p>

            <p className="footer-principal-relationship">
              Authorised Dealer for <Link to="/partners/ribo-industries">RIBO Industries</Link> in Maharashtra
            </p>

          </div>


          {/* QUICK LINKS */}

          <nav className="footer-column" aria-label="Footer quick links">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/industries">Industries</Link>
              </li>

              <li>
                <Link to="/partners">Partners</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

            </ul>

          </nav>


          {/* PRODUCTS */}

          <nav className="footer-column" aria-label="Footer product links">

            <h3>Our Products</h3>

            <ul>

              <li>
                <Link to="/products/boiler-tubes">Boiler Tubes</Link>
              </li>

              <li>
                <Link to="/products/economiser-coils">Economiser Coils</Link>
              </li>

              <li>
                <Link to="/products/superheater-coils">Superheater Coils</Link>
              </li>

              <li>
                <Link to="/products/water-wall-panels">Water Wall Panels</Link>
              </li>

            </ul>

            <Link to="/products" className="footer-view-all">
              View All Products <span aria-hidden="true">→</span>
            </Link>

          </nav>


          {/* CONTACT */}

          <div className="footer-column">

            <h3>Contact Information</h3>

            <div className="contact-info">

              <div>
                <FaMapMarkerAlt aria-hidden="true" />

                <span>
                  Above OneStep Saloon, Milan Chowk, Chandrapur, Maharashtra, India
                </span>
              </div>


              <div>
                <FaPhoneAlt aria-hidden="true" />

                <a href="tel:+919850333799">
                  +91 9850333799
                </a>
              </div>


              <div>
                <FaEnvelope aria-hidden="true" />

                <a href="mailto:info@pawanssiddhi.in">
                  info@pawanssiddhi.in
                </a>
              </div>

            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Pawanssiddhi Supplier Pvt Ltd.
            All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
