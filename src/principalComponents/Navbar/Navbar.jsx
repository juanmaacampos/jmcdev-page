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
          <Button to="/" label="Inicio" effect="neon" size="small" icon={<FaHome />} />
          <Button to="/planes" label="Planes" effect="neon" size="small" icon={<FaClipboardList />} />
          <Button to="/nosotros" label="Nosotros" effect="neon" size="small" icon={<FaUser />} />
          <Button to="/contacto" label="Contacto" effect="neon" size="small" icon={<FaEnvelope />} />
        </div>

        {/* Mobile menu button */}
        <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          <Button to="/" label="Inicio" effect="neon" size="small" icon={<FaHome />} />
          <Button to="/planes" label="Planes" effect="neon" size="small" icon={<FaClipboardList />} />
          <Button to="/nosotros" label="Nosotros" effect="neon" size="small" icon={<FaUser />} />
          <Button to="/contacto" label="Contacto" effect="neon" size="small" icon={<FaEnvelope />} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
