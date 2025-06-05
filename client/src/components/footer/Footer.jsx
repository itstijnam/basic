import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo/FooterLogo.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Tagline */}
        <div className="footer-section footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="footer-brand">
            Arch <span>Space Interio</span>
          </h2>
          <p className="footer-tagline">Where Dimension Take Shapes...</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/archspaceinterio21"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/designer-yash227989/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/archspace_interio/"><FaInstagram /></a>
            <a href="https://www.behance.net/asi21"><FaBehance /></a>
          </div>
        </div>

        {/* Center: Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Interior design</li>
            <li>Outdoor design</li>
            <li>Lighting design</li>
            <li>Office design</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FiMail className="icon" />
              <a href="mailto:archspaceinterio21@gmail.com">archspaceinterio21@gmail.com</a>
            </li>
            <li>
              <GoLocation className="icon" />
              Building No:45, Tej Mandi,
            </li>
            <li className="indent">Station Road, Alwar, Raj, 301001</li>
            <li>
              <FaWhatsapp className="icon" />
              <a href="https://wa.me/+919999167989">+91 9999167989</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
