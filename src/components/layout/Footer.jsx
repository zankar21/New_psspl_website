import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
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
              PAWANSSIDDHI <span>SUPPLIER PVT LTD</span>
            </Link>

            <p>
              Delivering reliable industrial engineering solutions
              and high-quality boiler pressure products for
              critical industrial applications.
            </p>


            <div className="social-links">

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

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
                <Link to="/industries">Industries</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

            </ul>

          </div>


          {/* PRODUCTS */}

          <div className="footer-column">

            <h3>Our Products</h3>

            <ul>

              <li>Boiler Tubes</li>

              <li>Economiser Coils</li>

              <li>Superheater Coils</li>

              <li>Water Wall Panels</li>

            </ul>

          </div>


          {/* CONTACT */}

          <div className="footer-column">

            <h3>Contact Information</h3>

            <div className="contact-info">

              <div>
                <FaMapMarkerAlt />

                <span>
                  Above OneStep Saloon, Milan Chowk, Chandrapur, Maharashtra, India
                </span>
              </div>


              <div>
                <FaPhoneAlt />

                <span>
                  +91 9850333799
                </span>
              </div>


              <div>
                <FaEnvelope />

                <span>
                  info@pawanssiddhi.in
                </span>
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

          <div className="footer-legal">

            <Link to="#">
              Privacy Policy
            </Link>

            <Link to="#">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;