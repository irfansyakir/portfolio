import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm interested in roles spanning software engineering, DevOps, UI/UX design, marketing, and business analysis. If you have a question or want to work together, feel free to reach out!</p>
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
                <a href="https://linkedin.com/in/irfansyakir30" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/irfansyakir30
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
          My expertise spans software engineering, DevOps, UI/UX design, digital marketing, and business analysis. I'm looking for roles that leverage my multidisciplinary skill set to create impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default Contact;