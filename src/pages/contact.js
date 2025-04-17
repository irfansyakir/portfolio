import React from 'react';
import './contact.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
 
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm interested in software engineering and DevOps opportunities. If you have a question or want to work together, feel free to reach out!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-method">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>
                <a href="mailto:irfansyakir@gmail.com">irfansyakir@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <p>
                <a href="https://linkedin.com/in/irfansyakir" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/irfansyakir
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="contact-details">
              <h3>GitHub</h3>
              <p>
                <a href="https://github.com/irfansyakir" target="_blank" rel="noopener noreferrer">
                  github.com/irfansyakir
                </a>
              </p>
            </div>
          </div>
        </div>
        
       
      </div>
      
      <div className="availability-section">
        <h2>Current Availability</h2>
        <div className="availability-status available">
          <span className="status-indicator"></span>
          <p>I'm currently available for new opportunities starting August 2025.</p>
        </div>
        <p className="availability-note">
          I'm most interested in Software Engineering and DevOps roles, but I'm open to discussing other opportunities that match my skills and interests.
        </p>
      </div>
    </div>
  );
};

export default Contact;