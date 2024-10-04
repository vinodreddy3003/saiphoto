import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src="src/assets/WhatsApp Image 2024-10-03 at 16.11.26_93f1485a.jpg" alt="" /></Link>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className="dropdown">
          <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
