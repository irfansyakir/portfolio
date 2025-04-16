import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - In a real application, you would send this to a backend
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
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
              <i className="fas fa-envelope"></i>
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
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>(+65) 9664 1005</p>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
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
              <i className="fab fa-github"></i>
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
        
        <div className="contact-form-container">
          <h2>Send me a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-status success">
                <p>Your message has been sent successfully! I'll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="availability-section">
        <h2>Current Availability</h2>
        <div className="availability-status available">
          <span className="status-indicator"></span>
          <p>I'm currently available for new opportunities starting June 2025.</p>
        </div>
        <p className="availability-note">
          I'm most interested in Software Engineering and DevOps roles, but I'm open to discussing other opportunities that match my skills and interests.
        </p>
      </div>
    </div>
  );
};

export default Contact;