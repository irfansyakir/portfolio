import React from 'react';
import './about.css';
import profileImage from '../assets/images/about/profile.jpg'; 
import ntuLogo from '../assets/images/about/ntu.png';
import spLogo from '../assets/images/about/sp.webp';
import steLogo from '../assets/images/about/ste.png';
import accentureLogo from '../assets/images/about/accenture.png';
import ProjectGallery from '../components/projectGallery';
import escendoCommittee from '../assets/images/escendo/group.jpeg';
import escendoJudges from '../assets/images/escendo/judges.jpeg';
import escendoFinalists from '../assets/images/escendo/finalists.jpeg';
import escendoMicron from '../assets/images/escendo/micron.jpeg';
import escendoEsp32 from '../assets/images/escendo/esp32.jpeg';
import escendoFinal from '../assets/images/escendo/group2.jpeg';
import escendoFirstDay from '../assets/images/escendo/1stday.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  const escendoGallery = [
    { src: escendoCommittee, alt: "NTU Escendo 2025 Committee", caption: "Escendo 2025 Commitee" },
    { src: escendoJudges, alt: "NTU Escendo 2025 Judges", caption: "Escendo 2025 Judges" },
    { src: escendoFinalists, alt: "NTU Escendo 2025 Finalists", caption: "Escendo 2025 Finalists" },
    { src: escendoMicron, alt: "NTU Escendo 2025 Micron", caption: "Micron!" },
    { src: escendoEsp32, alt: "NTU Escendo 2025 Espressif", caption: "Espressif!" },
    { src: escendoFirstDay, alt: "NTU Escendo 2025 First Day", caption: "First Day!" },
    { src: escendoFinal, alt: "NTU Escendo 2025 Final", caption: "Everyone!" },
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Aspiring Software Engineer & AI Enthusiast</p>
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
            I also have a strong interest in artificial intelligence and machine learning, having completed 
            several projects in computer vision, large language models, and predictive analytics. 
          </p>
          
          <p>
            I enjoy tackling complex problems and continuously learning new technologies. When I'm not
            coding you might find me gaming or hiking!
          </p>
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
              <p className="timeline-details">
                <li>Specialised in Software Engineering and Artificial Intelligence.</li>
                <br/>
                Completed coursework in: 
                <br/>
                <ul className='timeline-achievements'>
                  <li>Data Structures and Algorithms</li>
                  <li>Software Engineering</li>
                  <li>Object Oriented Programming</li>
                  <li>Web Application Development</li>
                  <li>Artificial Intelligence & Data Mining</li>
                  <li>Machine Learning Design Application</li>
                </ul>
                


              </p>
                {/* <br/>
                Completed coursework in Object Oriented Programming, <br/> Software Engineering, 
                Data Structures and Algorithms, Artificial Intelligence, Data Mining, and Machine Learning. </p> */}
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
              <p className="timeline-degree">Diploma in Computer Engineering</p>
              <p className="timeline-details">
                <li>Specialised in Computer Applications</li>
                <br/>
                Completed coursework in: 
                <br/>
                <ul className='timeline-achievements'>
                  <li>Mobile Application Development</li>
                  <li>Client Server Application Development</li>
                  <li>Web Application Development</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Machine Learning & AI</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="leadership-showcase">
        <h2>Leadership Experience</h2>
        <div className="leadership-card">
          <div className="leadership-header">
            <div className="leadership-title-section">
              <h3>NTU Escendo 2025</h3>
              <h4>Vice President (Branding and Marketing)</h4>
              <span className="tenure">Aug 2024 – January 2025</span>
            </div>
          </div>
          
          <div className="leadership-description">
            <p>
              Escendo is NTU Garage@EEE's flagship annual engineering makeathon, a premier 3-4 day event where student teams collaborate to develop innovative solutions for real-world challenges.
            </p>
            <br/>
            <p>
              Escendo 2025's theme, "Optimising the Future: Lean Solutions," challenges participants to apply lean methodology to create efficient, impactful innovations. The event combines technical workshops, industry mentorship, and concludes with pitches to expert judges.
            </p>
            <br/>
            <p>
              It's proudly supported by industry leaders: Micron Singapore (Platinum Sponsor), Huawei (Silver Sponsor), and Singapore Aerospace Manufacturing SAM Group, Espressif Systems, and Marvell Technology (Bronze Sponsors).
            </p>
            <br/>
            <p>
              As Vice President of Branding and Marketing for Escendo 2025, I led the development of digital assets and marketing campaigns and coordinated cross-functional teams to create comprehensive brand strategies, designed visual identities, and established communication channels.
            </p>
          </div>
            
        
          <ProjectGallery 
            images={escendoGallery}
            projectCategory="Marketing"
          />
          
          <div className="leadership-highlights">
            <h4>Key Responsibilities</h4>
            <ul>
              <li>Led development of brand strategy and visual identity</li>
              <li>Managed Escendo's Instagram page and oversaw social media content strategy</li>
              <li>Led a team of designers for posts, posters, and merchandise creation</li>
              <li>Coordinated coverage team for photography and videography</li>
            </ul>

            <div className="leadership-links">
              <a href="https://www.instagram.com/escendo_ntu/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a href="https://www.linkedin.com/posts/ntueee_escendo2025-escendo2025-ntueee-ugcPost-7293481080639090688-CyNy?utm_source=share&utm_medium=member_desktop&rcm=ACoAACqXZ9QBYsbcfgPR6oz1bOtRwOOXXuQB-Jo" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a href="https://www.youtube.com/watch?v=Bx8YbvXCJHg" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faYoutube} /> Event Highlights
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default About;