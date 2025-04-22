import React, { useState } from 'react';
import { Link } from 'react-router';
import './home.css';
import profileImage from '../assets/images/about/profile.jpg'; 
import projectsData from '../data/projects.json';
import { getProjectImages } from '../utils/projectImageUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import steLogo from '../assets/images/about/ste.png';
import accentureLogo from '../assets/images/about/accenture.png';
import ntuLogo from '../assets/images/about/ntu.png';
import spLogo from '../assets/images/about/sp.webp';

const Home = () => {
  const [activeTab, setActiveTab] = useState('work');
  const featuredProject1 = projectsData[0];
  const featuredProjectImage1 = getProjectImages(featuredProject1.id)[7]?.src;
  const featuredProject2 = projectsData[1];
  const featuredProjectImage2 = getProjectImages(featuredProject2.id)[7]?.src;
  const featuredProject3 = projectsData[2];
  const featuredProjectImage3 = getProjectImages(featuredProject3.id)[7]?.src;
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>hello! i'm irfan! 👋</h1>
          <h2>Aspiring Software Engineer</h2>
          <p>I am a soon to be graduate from NTU who is passionate about building innovative solutions with modern technologies!</p>
          <div className="hero-social-links">
            <a href="/resume.pdf" className="hero-social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileDownload} /> Resume
            </a>
            <a href="https://github.com/irfansyakir" className="hero-social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="https://linkedin.com/in/irfansyakir30" className="hero-social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="mailto:irfansyakir@gmail.com" className="hero-social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Irfan Syakir - Software Engineer" />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-section">
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
                  <div className="work-date">May 2024 – Jul 2024</div>
                  <div className="work-title">ST Engineering</div>
                  <div className="work-position">DevOps Intern</div>
                  <ul className="work-description">
                    <li>Implemented DevOps best practices to enhance collaboration between development and operations teams</li>
                    <li>Optimized existing automation processes using Terraform to improve reliability and performance</li>
                    <li>Designed and implemented CI/CD pipelines to automate software delivery</li>
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
                    <li>Specialised in Software Engineering and Artificial Intelligence</li>
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
                    <li>Specialised in Computer Applications</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="skills-highlight">
        <h2>Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C/C++</li>
              <li>Dart</li>
              <li>Bash/Shell</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Flutter</li>
              <li>React</li>
              <li>XAMPP</li>
              <li>Node.js</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
            </ul>
          </div> 
          <div className="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>CI/CD</li>
              <li>Terraform</li>
              <li>Pipelines & Workflows</li>
              <li>Digital Ocean</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Artificial Intelligence & Machine Learning</h3>
            <ul>
              <li>Computer Vision</li>
              <li>Deep Learning</li>
              <li>Large Language Models</li>
              <li>Data Mining</li>
            </ul>
          </div>
        </div>
        <Link to="/skills" className="view-all">View All Skills →</Link>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
        
          {/* Featured Project 1*/}
          <div className="project-card">
            <div className="project-image">
              {featuredProjectImage1 ? (
                <img src={featuredProjectImage1} alt={featuredProject1.title} />
              ) : (
                <span>{featuredProject1.title}</span>
              )}
            </div>
            <div className="project-info">
              <h3>{featuredProject1.title}</h3>
              <p>{featuredProject1.description}</p>
              <div className="project-tags">
                {featuredProject1.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="featured-project-link">
                <Link to={`/project/${featuredProject1.id}`} className="view-project">View Project</Link>
              </div>
            </div>
          </div>

          {/* Featured Project 2*/}
          <div className="project-card">
            <div className="project-image">
              {featuredProjectImage2 ? (
                <img src={featuredProjectImage2} alt={featuredProject2.title} />
              ) : (
                <span>{featuredProject2.title}</span>
              )}
            </div>
            <div className="project-info">
              <h3>{featuredProject2.title}</h3>
              <p>{featuredProject2.description}</p>
              <div className="project-tags">
                {featuredProject2.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="featured-project-link">
                <Link to={`/project/${featuredProject2.id}`} className="view-project">View Project</Link>
              </div>
            </div>
          </div>

           {/* Featured Project 3*/}
           <div className="project-card">
            <div className="project-image">
              {featuredProjectImage3 ? (
                <img src={featuredProjectImage3} alt={featuredProject3.title} />
              ) : (
                <span>{featuredProject3.title}</span>
              )}
            </div>
            <div className="project-info">
              <h3>{featuredProject3.title}</h3>
              <p>{featuredProject3.description}</p>
              <div className="project-tags">
                {featuredProject3.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="featured-project-link">
                <Link to={`/project/${featuredProject3.id}`} className="view-project">View Project</Link>
              </div>
            </div>
          </div>

         
          
        </div>
        
        <Link to="/projects" className="view-all">View All Projects →</Link>
      </section>

      {/* Brief About Section */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I'm a final-year Information Engineering & Media student at Nanyang Technological University 
          with a passion for building efficient, user-friendly applications. My experience spans from full-stack development
          to DevOps practices, with a focus on creating innovative solutions. I'm also interested in 
          artificial intelligence and machine learning applications, having worked on several ML projects 
          including computer vision and LLMs.
        </p>
        <Link to="/about" className="view-all">Learn More About Me →</Link>
      </section>
    </div>
  );
};

export default Home;