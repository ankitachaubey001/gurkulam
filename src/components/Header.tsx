import React, { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">AI Global Study</div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <button className="cta-button">Enroll Now</button>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};
