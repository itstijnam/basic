import React from 'react';
import './Footer.scss'; 
import logo from '../../assets/logo/logo.png'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            
            <img src={logo} alt="Logo" />
          </div>
          <h2>
            Arch <span>Space Interio</span>
          </h2>
          <p>Where Dimension Take Shapes...</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-center">
          <h3>Contact Us</h3>
          <p>archspaceinterio21@gmail.com</p>
          <p>Building No:45, Tej Mandi,</p>
          <p>Station Road, Alwar, Raj, 301001</p>
          <p>+91 9999167989</p>
        </div>

        {/* Quick Links */}
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
