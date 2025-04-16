import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-logo">Irfan Syakir</h2>
            <p className="footer-description">
              Software Engineer & DevOps enthusiast passionate about building efficient, 
              user-friendly applications and implementing effective automation solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/irfansyakir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/irfansyakir" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:irfansyakir@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h2>Contact Info</h2>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:irfansyakir@gmail.com">irfansyakir@gmail.com</a>
              </li>
             
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Singapore</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Irfan Syakir. All rights reserved.</p>
          <p className="footer-credit">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;