import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const onOutside = event => {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const onKey = event => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);


  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar" ref={headerRef}>
      <div className="container navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <img
            className="navbar-brand-image"
            src="/psspl-logo/Psspl-logo-1.png"
            alt="PSSPL — Pawanssiddhi Supplier Pvt Ltd"
            width="2172"
            height="724"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

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



      </div>
    </header>
  );
}

export default Navbar;
