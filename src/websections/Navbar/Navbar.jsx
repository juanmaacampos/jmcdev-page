import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { FaBriefcase, FaClipboardList, FaUser, FaEnvelope, FaHome } from 'react-icons/fa';
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
          <Button label="Servicios" effect="neon" size="small" icon={<FaUser />} scrollTarget="servicios" />
          <Button label="Planes" effect="neon" size="small" icon={<FaClipboardList />} scrollTarget="planes" />
          <Button label="Proyectos" effect="neon" size="small" icon={<FaBriefcase />} scrollTarget="portafolio" />
          <Button label="Contacto" effect="primary" size="small" icon={<FaEnvelope />} color='#663399' scrollTarget="contacto" />
        </div>

        {/* Mobile menu button */}
        <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-dropdown ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-items">
          <Button label="Servicios" effect="neon" size="small" icon={<FaUser />} scrollTarget="servicios" />
          <Button label="Planes" effect="neon" size="small" icon={<FaClipboardList />} scrollTarget="planes" />
          <Button label="Proyectos" effect="neon" size="small" icon={<FaBriefcase />} scrollTarget="portafolio" />
          <Button label="Contacto" effect="primary" size="small" icon={<FaEnvelope />} color='#663399' scrollTarget="contacto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
