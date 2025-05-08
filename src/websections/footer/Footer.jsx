import React from 'react';
import Logo from '../../components/Logo/Logo';
import IconLink from '../../components/IconLink/IconLink';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsBriefcase } from 'react-icons/bs';
import styles from './Footer.module.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <p className={styles.copyright}>
                    <span>{currentYear}</span> JMCdev | © Todos los derechos reservados
                </p>
            </div>
            
            <div className={`${styles.footerSection} ${styles.centerSection}`}>
                <Logo />
            </div>
            
            <div className={`${styles.footerSection} ${styles.socialLinks}`}>
                <IconLink 
                    icon={FaWhatsapp}
                    to="https://wa.me/+541123867041"
                    label="WhatsApp"
                    effect="scale"
                    color="#25D366"
                    external
                />
                <IconLink 
                    icon={FaInstagram}
                    to="https://instagram.com/juanmaacampos"
                    label="Instagram"
                    effect="scale"
                    color="#E4405F"
                    external
                />
                <IconLink 
                    icon={FaLinkedinIn}
                    to="https://www.linkedin.com/in/juan-manuel-ccampos"
                    label="LinkedIn"
                    effect="scale"
                    color="#0A66C2"
                    external
                />
                <IconLink 
                    icon={FaGithub}
                    to="https://github.com/juanmaacampos"
                    label="GitHub"
                    effect="scale"
                    color="#181717"
                    external
                />
                <IconLink 
                    icon={BsBriefcase}
                    to="https://juanmaacampos.github.io/juanmacampos-portfolio/"
                    label="Portfolio"
                    effect="scale"
                    external
                />
            </div>
        </footer>
    );
};

export default Footer;
