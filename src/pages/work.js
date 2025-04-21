import React, { useState } from 'react';
import './work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import steLogo from '../assets/images/about/ste.png';
import accentureLogo from '../assets/images/about/accenture.png';
import ntuLogo from '../assets/images/about/ntu.png';
import spLogo from '../assets/images/about/sp.webp';

const Work = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  return (
    <div className="work-container">
      {/* Social Links Section */}
      <div className="social-links-container">
        <div className="social-links">
          <a href="https://github.com/irfansyakir" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://linkedin.com/in/irfansyakir30" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://irfansyakir.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} /> Website
          </a>
          <a href="/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="tabs-container">
        <div 
          className={`tab ${activeTab === 'work' ? 'active' : ''}`} 
          onClick={() => setActiveTab('work')}
        >
          Work
        </div>
        <div 
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </div>
      </div>
      
      {/* Content Container */}
      <div className="content-container">
        {/* Work Experience */}
        {activeTab === 'work' && (
          <div className="work-experience">
            {/* ST Engineering */}
            <div className="work-entry">
              <div className="work-logo">
                <img src={steLogo} alt="ST Engineering" />
              </div>
              <div className="work-details">
                <div className="work-date">May 2024 - Jul 2024</div>
                <div className="work-title">ST Engineering</div>
                <div className="work-position">DevOps Intern</div>
                <ul className="work-description">
                  <li>Implemented DevOps best practices to enhance collaboration between development and operations teams</li>
                  <li>Optimized existing automation processes using Terraform to improve reliability and performance</li>
                  <li>Designed and implemented CI/CD pipelines to automate software delivery</li>
                  <li>Worked on infrastructure for AI model deployment and continuous training pipelines</li>
                </ul>
              </div>
            </div>
            
            {/* Accenture Business Analyst */}
            <div className="work-entry">
              <div className="work-logo">
                <img src={accentureLogo} alt="Accenture" />
              </div>
              <div className="work-details">
                <div className="work-date">Mar 2020 - Jun 2020</div>
                <div className="work-title">Accenture</div>
                <div className="work-position">Business Analyst</div>
                <ul className="work-description">
                  <li>Applied RPA techniques to automate software testing protocols</li>
                  <li>Leveraged robust data analysis techniques to identify inefficiencies and streamline processes</li>
                  <li>Utilized predictive analytics to forecast business trends and optimize resource allocation</li>
                </ul>
              </div>
            </div>
            
            {/* Accenture Test Analyst */}
            <div className="work-entry">
              <div className="work-logo">
                <img src={accentureLogo} alt="Accenture" />
              </div>
              <div className="work-details">
                <div className="work-date">Sep 2019 - Feb 2020</div>
                <div className="work-title">Accenture</div>
                <div className="work-position">Test Analyst Intern</div>
                <ul className="work-description">
                  <li>Utilized RPA to automate testing processes of a government client's computer system</li>
                  <li>Drove improvements in system reliability and operational efficiency through automation solutions</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Education */}
        {activeTab === 'education' && (
          <div className="education-experience">
            {/* NTU Education */}
            <div className="work-entry">
              <div className="work-logo">
                <img src={ntuLogo} alt="Nanyang Technological University" />
              </div>
              <div className="work-details">
                <div className="work-date">Aug 2022 - May 2025 (Expected)</div>
                <div className="work-title">Nanyang Technological University (NTU)</div>
                <div className="work-position">Bachelor of Engineering, Information Engineering and Media</div>
                <ul className="work-description">
                  <li>Specialized in Software Engineering and Artificial Intelligence</li>
                  <li>Completed coursework in Object Oriented Programming, Software Engineering, Data Structures and Algorithms, Artificial Intelligence, Data Mining, and Machine Learning</li>
                </ul>
              </div>
            </div>
            
            {/* SP Education */}
            <div className="work-entry">
              <div className="work-logo">
                <img src={spLogo} alt="Singapore Polytechnic" />
              </div>
              <div className="work-details">
                <div className="work-date">Apr 2017 - Mar 2020</div>
                <div className="work-title">Singapore Polytechnic (SP)</div>
                <div className="work-position">Diploma in Computer Engineering</div>
                <ul className="work-description">
                  <li>Specialized in Computer Applications</li>
                  <li>Completed coursework in Mobile Application Development, Data Structures and Algorithms, Web Applications and Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
