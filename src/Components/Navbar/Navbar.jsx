import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'Services', label: 'Services' },
  { to: 'Experience', label: 'Experience' },
  { to: 'Portfolio', label: 'Projects' },
  { to: 'Testimonials', label: 'Certificates' },
];

const Navbar = () => {
  return (
    <nav className="n-wrapper" aria-label="Main Navigation">
      <div className="n-left">
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            {navLinks.map((link, idx) => (
              <li key={idx} className="nav-item">
                <Link
                  spy={true}
                  to={link.to}
                  smooth={true}
                  activeClass="activeClass"
                  aria-label={link.label}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          spy={true}
          to="Contact"
          smooth={true}
          className="n-button button"
          activeClass="activeClass"
          aria-label="Contact"
          tabIndex={0}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;