import React from 'react';
import './about.css';
import profileImage from '../assets/images/about/profile.jpg'; 
import ntuLogo from '../assets/images/about/ntu.png';
import spLogo from '../assets/images/about/sp.webp';
import steLogo from '../assets/images/about/ste.png';
import accentureLogo from '../assets/images/about/accenture.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Aspiring Software Engineer</p>
      </div>
      
      <div className="about-content">
        <div className="hero-image">
          <img src={profileImage} alt="Irfan Syakir - Software Engineer" />
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm Irfan Syakir, a soon-to-be graduate from Nanyang Technological University 
            with a Bachelor's degree in Information Engineering and Media. I'm passionate about
            creating efficient, user-friendly applications and implementing effective automation solutions.
          </p>
          
          <p>
            My journey in software development began during my time at Singapore Polytechnic, 
            where I discovered my passion for programming and software development. Since then, I've developed a diverse
            skill set spanning full-stack development, mobile applications, and DevOps practices.
          </p>
          
          <p>
            I have professional experience as a DevOps Intern at ST Engineering, where I implemented
            best practices to enhance collaboration between development and operations teams. I also
            worked at Accenture as a Test Analyst Intern and later as a Business Analyst, where I
            applied RPA techniques to automate software testing protocols.
          </p>
          
          <p>
            I enjoy tackling complex problems and continuously learning new technologies. When I'm not
            coding, you might find me gaming or hiking.
          </p>
          
          <div className="about-cta">
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
            <a 
              href="/portfolio/irfan_syakir_resume.pdf" 
              className="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="education-section">
        <h2>Education</h2>
        <div className="timeline">
          {/* NTU Education */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={ntuLogo} alt="Nanyang Technological University" />
              </div>
              <h3 className="timeline-title">Nanyang Technological University (NTU)</h3>
              <p className="timeline-date">Aug 2022 – May 2025 (Expected)</p>
              <p className="timeline-degree">Bachelor of Engineering,<br />Information Engineering and Media</p>
            </div>
          </div>
          
          {/* SP Education */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={spLogo} alt="Singapore Polytechnic" />
              </div>
              <h3 className="timeline-title">Singapore Polytechnic (SP)</h3>
              <p className="timeline-date">Apr 2017 – Mar 2020</p>
              <p className="timeline-degree">Diploma in Computer Engineering,<br />GPA: 3.72</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="experience-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {/* ST Engineering Experience */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={steLogo} alt="ST Engineering" />
              </div>
              <h3 className="timeline-title">DevOps Intern</h3>
              <p className="timeline-date">May 2024 – Jul 2024</p>
              <p className="timeline-company">ST Engineering</p>
              <ul className="timeline-achievements">
                <li>Implemented DevOps best practices to enhance collaboration between development and operations teams</li>
                <li>Optimized existing automation processes using Terraform to improve reliability and performance</li>
                <li>Designed and implemented CI/CD pipelines to automate software delivery</li>
              </ul>
            </div>
          </div>
          
          {/* Accenture Business Analyst */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={accentureLogo} alt="Accenture" />
              </div>
              <h3 className="timeline-title">Business Analyst</h3>
              <p className="timeline-date">Mar 2020 - Jun 2020</p>
              <p className="timeline-company">Accenture</p>
              <ul className="timeline-achievements">
                <li>Applied RPA techniques to automate software testing protocols</li>
                <li>Leveraged robust data analysis techniques to identify inefficiencies and streamline processes</li>
              </ul>
            </div>
          </div>
          
          {/* Accenture Test Analyst */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={accentureLogo} alt="Accenture" />
              </div>
              <h3 className="timeline-title">Test Analyst Intern</h3>
              <p className="timeline-date">Sep 2019 – Feb 2020</p>
              <p className="timeline-company">Accenture</p>
              <ul className="timeline-achievements">
                <li>Utilised RPA to automate testing processes of a government client's computer system</li>
                <li>Drove improvements in system reliability and operational efficiency through automation solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;