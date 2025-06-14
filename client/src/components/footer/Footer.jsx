import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo/FooterLogo.png';
import { FaFacebook, FaLinkedin, FaInstagram, FaBehance, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Tagline */}
        <div className="footer-section footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2 className="footer-brand">
            Arch <span> Space </span> Interio
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
            <li onClick={()=>navigate(`/service/Interior Design`)} >Interior design</li>
            <li onClick={()=>navigate(`/service/Outdoor Design`)}>Outdoor design</li>
            <li onClick={()=>navigate(`/service/Lighting Design`)}>Lighting design</li>
            <li onClick={()=>navigate(`/service/Office Design`)}>Office design</li>
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
              <a href="https://wa.me/+918287108009">+91 9999167989</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='line'></div>
        <p>Designed and developed by <a href="https://www.houseofmarktech.com/" className='houseofmarktech' >House Of MarkTech ❤️</a> </p>
      </div>
      
      
    </footer>
  );
};

export default Footer;
