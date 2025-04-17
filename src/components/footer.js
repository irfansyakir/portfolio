import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  
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
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/irfansyakir30" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:irfansyakir@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
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
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        
        </div>
        
        <div className="footer-bottom">
          <p className="footer-credit">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;