import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { FaHome, FaClipboardList, FaUser, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo onClick={scrollToTop} />

        {/* Regular navbar links - visible on desktop */}
        <div className="nav-links">
          <Link to="/planes" className="nav-link">Planes</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
          <Button 
            label="Ver Planes" 
            to="/planes" 
            effect="neon"
            size="small"
          />
        </div>

        {/* Mobile menu button */}
        <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          <Link to="/" className="menu-item">
            <FaHome className="menu-icon" />
            <span>Inicio</span>
          </Link>
          <Link to="/planes" className="menu-item">
            <FaClipboardList className="menu-icon" />
            <span>Planes</span>
          </Link>
          <Link to="/nosotros" className="menu-item">
            <FaUser className="menu-icon" />
            <span>Nosotros</span>
          </Link>
          <Link to="/contacto" className="menu-item">
            <FaEnvelope className="menu-icon" />
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
