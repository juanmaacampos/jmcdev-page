import React, { useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { FaBriefcase, FaClipboardList, FaUser, FaEnvelope, FaHome } from 'react-icons/fa';
// Import images using ES6 import syntax
import logoImage from '../../assets/images/jmcdev.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;

      if (prevOffset > currentOffset) {
        setScrollDirection('up');
      } else if (prevOffset < currentOffset) {
        setScrollDirection('down');
      }

      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevOffset]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsMenuOpen(false); // Close the mobile menu after a delay
    }, 100); // Adjust the delay (in milliseconds) as needed
  };

  const navbarClass = `navbar ${scrollDirection === 'down' ? 'hidden' : ''}`;

  return (
    <nav className={navbarClass} style={navbarStyle}>
      <div className="navbar-container">
        {/* Example of passing imported image to a component */}
        <Logo onClick={scrollToTop} logoSrc={logoImage} />

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
