import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Footer Content */}
      <div className="footer-content">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYelp />
          </a>
        </div>
        <p className="copyright">
          COPYRIGHT © {new Date().getFullYear()} MARCI METZGER HOMES - ALL
          RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
