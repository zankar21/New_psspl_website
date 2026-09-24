import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          PAWANSSIDDHI <span>Supplier Pvt Ltd</span>
        </Link>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={isOpen ? "nav-menu active" : "nav-menu"}
          aria-label="Primary navigation"
        >

          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/industries" onClick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/partners" onClick={closeMenu}>
  Partners
</NavLink>

          <NavLink
            to="/contact"
            className="contact-button"
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
