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

import ProjectGallery from '../components/projectGallery';
import escendoCommittee from '../assets/images/escendo/group.jpeg';
import escendoJudges from '../assets/images/escendo/judges.jpeg';
import escendoFinalists from '../assets/images/escendo/finalists.jpeg';
import escendoMicron from '../assets/images/escendo/micron.jpeg';
import escendoEsp32 from '../assets/images/escendo/esp32.jpeg';
import escendoFinal from '../assets/images/escendo/group2.jpeg';
import escendoFirstDay from '../assets/images/escendo/1stday.jpeg';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const escendoGallery = [
    { src: escendoCommittee, alt: "NTU Escendo 2025 Committee", caption: "Escendo 2025 Commitee" },
    { src: escendoJudges, alt: "NTU Escendo 2025 Judges", caption: "Escendo 2025 Judges" },
    { src: escendoFinalists, alt: "NTU Escendo 2025 Finalists", caption: "Escendo 2025 Finalists" },
    { src: escendoMicron, alt: "NTU Escendo 2025 Micron", caption: "Micron!" },
    { src: escendoEsp32, alt: "NTU Escendo 2025 Espressif", caption: "Espressif!" },
    { src: escendoFirstDay, alt: "NTU Escendo 2025 First Day", caption: "First Day!" },
    { src: escendoFinal, alt: "NTU Escendo 2025 Final", caption: "Everyone!" },
  ];

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
          <h2>Digital Innovator</h2>
          <p>I'm a soon-to-be graduate from NTU with expertise spanning Software Engineering, DevOps, UI/UX, Digital Marketing, and Business Analysis.</p> 
            
          <p>I combine technical problem-solving with creative thinking to build efficient solutions that deliver measurable business impact.</p>
          <div className="hero-social-links">
            {/* <a href="/irfan_syakir_resume.pdf" className="hero-social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileDownload} /> Resume
            </a> */}
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
          <img src={profileImage} alt="Irfan Syakir - Digital Innovator" />
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
                  {/* <ul className="work-description">
                    <li>Implemented CI/CD pipelines and infrastructure-as-code using Terraform across cloud platforms, reducing deployment times by 40%</li>
                    <li>Designed and documented automation workflows that improved cross-team collaboration and stakeholder visibility</li>
                    <li>Created cloud monitoring solutions for system reliability and presented performance metrics to key stakeholders</li>
                  </ul> */}
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
                  {/* <ul className="work-description">
                    <li>Applied automation techniques to streamline processes and improve operational efficiency for a government client.</li>
                    <li>Analyzed business requirements and translated them into technical specifications</li>
                    <li>Created data visualizations to communicate insights to stakeholders</li>
                  </ul> */}
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
                  <div className="work-position">Test Analyst</div>
                  {/* <ul className="work-description">
                    <li>Developed automated testing solutions using RPA for a government client, reducing testing time by 40%</li>
                    <li>Evaluated system functionality against business requirements</li>
                    <li>Collaborated with cross-functional teams to improve system reliability</li>
                  </ul> */}
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
                    <li>Specialized in Software Engineering, UI/UX Design, Digital Media</li>
                    <li>Member of various Branding and Marketing Roles in Student Organisations</li>
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
                    <li>Focused on Computer Application Design and Development</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
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
              <p>A mobile learning app with intuitive UI designed to improve user comprehension of complex mathematical concepts. Applied user research and iterative design to create an engaging educational experience.</p>
              <div className="project-tags">
                <span>UI/UX Design</span>
                <span>Mobile</span>
                <span>Education</span>
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
              <p>A collaborative social music platform designed to enhance community engagement and content discovery. Used journey mapping and user personas to create intuitive interaction flows.</p>
              <div className="project-tags">
                <span>Social</span>
                <span>User Research</span>
                <span>Prototyping</span>
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
              <p>A reimagined classic game with custom-designed visual elements and engaging user interactions. Applied game design principles to create a delightful user experience with clear visual feedback.</p>
              <div className="project-tags">
                <span>Game Design</span>
                <span>Visual Design</span>
                <span>UX</span>
              </div>
              <div className="featured-project-link">
                <Link to={`/project/${featuredProject3.id}`} className="view-project">View Project</Link>
              </div>
            </div>
          </div>
          
        </div>
        
        <Link to="/projects" className="view-all">View All Projects →</Link>
      </section>

      

      

      <section>
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
                Led the branding and marketing strategy for NTU's premier engineering makeathon, creating a cohesive visual identity that resonated with sponsors, participants, and judges.
              </p>
              <br/>
              <p>
                Developed comprehensive brand guidelines around the theme "Optimising the Future: Lean Solutions" that guided all visual communications and established a consistent voice across platforms.
              </p>
              <br/>
              <p>
                Created compelling visual storytelling that effectively communicated complex engineering challenges to diverse audiences, helping secure sponsorships from industry leaders including Micron Singapore, Huawei, and others.
              </p>
              <br/>
              <p>
                Managed a cross-functional creative team, fostering collaboration between designers, photographers, and content creators to deliver an integrated marketing campaign that increased participation by 30% from previous years.
              </p>
            </div>
              
          
            <ProjectGallery 
              images={escendoGallery}
              projectCategory="Marketing"
            />
            
            <div className="leadership-highlights">
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Created and implemented comprehensive brand strategy and visual identity</li>
                <li>Designed marketing collateral including digital assets, event signage, and merchandise</li>
                <li>Directed social media content strategy and audience engagement campaigns</li>
                <li>Managed creative team workflows and coordinated cross-functional deliverables</li>
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
         
      </section>

      {/* Featured Skills Section */}
      <section className="skills-highlight">
        <h2>Core Competencies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Software Engineering</h3>
            <ul>
              <li>Java, Python, JavaScript</li>
              <li>Data Structures & Algorithms</li>
              <li>Flutter & React</li>
              <li>Mobile & Web Development</li>
              <li>Object-Oriented Programming</li>
              <li>Data Structures & Algorithms</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & Cloud</h3>
            <ul>
              <li>CI/CD Pipelines</li>
              <li>Infrastructure as Code</li>
              <li>Terraform & Docker</li>
              <li>Version Control (Git)</li>
              <li>Cloud Services</li>
              <li>System Monitoring</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Design & Analysis</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Requirements Gathering</li>
              <li>Process Optimization</li>
              <li>User Research</li>
              <li>Data Visualization</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Professional Skills</h3>
            <ul>
              <li>Cross-functional Collaboration</li>
              <li>Problem Solving</li>
              <li>Technical Documentation</li>
              <li>Stakeholder Management</li>
              <li>Project Planning</li>
              <li>Presentation Skills</li>
            </ul>
          </div>
        </div>
        <Link to="/skills" className="view-all">View All Skills →</Link>
      </section>
        
      {/* Brief About Section */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
        I'm a design-focused problem solver with a passion for creating intuitive, user-centered digital experiences that drive business value.
        <br/><br/>
        My background in Information Engineering and Media at NTU has equipped me with a unique blend of design thinking, software engineering, marketing, and business analysis skills, allowing me to bridge the gap between user needs and organizational goals.
        <br/><br/>
        I'm particularly interested in the intersection of technology, design and business strategy, where thoughtful UX solutions can transform complex challenges into engaging experiences that deliver measurable results.
        </p>
        <Link to="/about" className="view-all">Learn More About Me →</Link>
      </section>
    </div>
  );
};

export default Home;