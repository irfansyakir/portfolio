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
import { faUser, faPalette, faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
        <p className="subtitle">Cloud Engineer & Technology Professional</p>
      </div>
      
      <div className="about-content">
        <div className="hero-image">
          <img src={profileImage} alt="Irfan Syakir - Cloud Engineer" />
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm Irfan Syakir, a Cloud Engineer at ST Engineering with a Bachelor's degree 
            in Information Engineering and Media from Nanyang Technological University. I'm passionate about
            creating scalable cloud solutions and leveraging technology to solve complex business problems.
          </p>
          
          <p>
            My journey in technology began during my time at Singapore Polytechnic, 
            where I discovered a passion for combining programming, creative problem-solving with analytical thinking. 
            Since then, I've developed expertise spanning software engineering, DevOps, cloud infrastructure, UX/UI design, and data-driven 
            business analysis.
          </p>
          
          <p>
            My approach is both creative and analytical—I leverage design thinking methodologies to understand 
            user needs while applying engineering principles to ensure solutions deliver measurable value. 
            This hybrid perspective allows me to bridge the gap between technical implementation and business goals.
          </p>
          
          <p>
            When I'm not working on cloud architectures or exploring new technologies, you might find me exploring photography, 
            staying updated on tech trends, or hiking to find inspiration in nature!
          </p>
        </div>
      </div>

      <div className="core-values-section">
        <h2>My Approach</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h3>User-Centered</h3>
            <p>I believe great technology starts with understanding users deeply—their needs, motivations, and pain points. This empathetic foundation informs all my technical decisions.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3>Purposeful Design</h3>
            <p>Visual design isn't just about aesthetics—it's about creating intuitive experiences where every element serves a purpose in guiding users and communicating effectively.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Business Impact</h3>
            <p>I focus on creating solutions that not only delight users but also deliver measurable business value through increased efficiency, reliability, and scalability.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Continuous Learning</h3>
            <p>Technology evolves rapidly—I embrace continuous learning and iteration, staying current with cloud technologies and best practices to deliver cutting-edge solutions.</p>
          </div>
        </div>
      </div>

      <div className="experience-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {/* Current ST Engineering Role */}
          <div className="timeline-item current-role">
            <div className="timeline-dot current"></div>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={steLogo} alt="ST Engineering" />
              </div>
              <h3 className="timeline-title">Cloud Engineer</h3>
              <p className="timeline-date">Jun 2025 – Present</p>
              <p className="timeline-company">ST Engineering</p>
            </div>
          </div>

          {/* ST Engineering Internship */}
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
                <li>Implemented CI/CD pipelines using GitHub Actions and GitLab CI, reducing release cycles and improving deployment reliability</li>
                <li>Created infrastructure-as-code solutions using Terraform for cloud resource management</li>
                <li>Designed monitoring and alerting systems that improved incident response times</li>
                <li>Developed comprehensive technical documentation for DevOps workflows</li>
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
                <li>Designed data visualization dashboards that transformed complex metrics into actionable insights for stakeholders</li>
                <li>Conducted user interviews and stakeholder workshops to gather requirements and map business processes</li>
                <li>Created user journey maps and process flow diagrams to identify optimization opportunities</li>
                <li>Collaborated with design and development teams to ensure business requirements aligned with user experience goals</li>
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
                <li>Developed automated testing solutions using RPA techniques for government client systems</li>
                <li>Created wireframes and low-fidelity prototypes to demonstrate improved user flows and interfaces</li>
                <li>Collaborated with cross-functional teams to improve system reliability and user experience</li>
                <li>Produced documentation including test cases and process improvement recommendations</li>
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
              <p className="timeline-date">Aug 2022 – May 2025</p>
              <p className="timeline-degree">Bachelor of Engineering,<br />Information Engineering and Media</p>
              <p className="timeline-details">
                <li>Specialised in Software Engineering, UX/UI Design, Digital Media, and Branding & Marketing</li>
                <li>Member of various Branding and Marketing Roles in Student Organisations</li>
                <br/>
                Relevant coursework: 
                <br/>
                <ul className='timeline-achievements'>
                  <li>Software Engineering</li>
                  <li>Thinking & Communicating Visually</li>
                  <li>Interface Design</li>
                  <li>Web Design & Technologies</li>
                  <li>Database Design</li>
                  <li>Object Oriented Programming</li>
                  <li>Data Structures & Algorithms</li>
                </ul>
              </p>
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
                <li>Focused on Computer Application Design and Development</li>
                <br/>
                Relevant coursework: 
                <br/>
                <ul className='timeline-achievements'>
                  <li>Mobile Application Development</li>
                  <li>Visual Communication</li>
                  <li>Design Thinking</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="design-philosophy-section">
        <h2>Professional Philosophy</h2>
        <div className="philosophy-content">
          <p>
            I believe that exceptional technology solutions exist at the intersection of user needs, business goals, and technical excellence. 
            My approach is rooted in understanding the people who will use the systems—combined with analytical rigor to ensure 
            solutions deliver measurable business impact.
          </p>
          <p>
            Good technology should feel intuitive and effortless to users while strategically advancing business objectives. Whether I'm designing 
            cloud architectures, building automation pipelines, or creating user interfaces, I focus on creating experiences that are both purposeful 
            and efficient.
          </p>
          <p>
            My process involves continuous iteration informed by user feedback, system metrics, and business requirements. I'm driven by the belief that 
            technology is never truly "finished"—there's always an opportunity to learn, refine, and improve based on real-world usage and evolving needs.
          </p>
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
              Led the complete visual identity development for Escendo 2025, NTU's premier engineering makeathon, creating a cohesive design system that effectively communicated the event's theme "Optimising the Future: Lean Solutions" across all touchpoints.
            </p>
            <br/>
            <p>
              Managed a cross-functional creative team of designers, photographers, and content creators, establishing clear processes for design review, feedback, and implementation to ensure consistency in all visual communications.
            </p>
            <br/>
            <p>
              Created compelling visual storytelling that translated complex engineering concepts into accessible marketing materials, helping secure sponsorships from industry leaders including Micron Singapore, Huawei, and others.
            </p>
            <br/>
            <p>
              Developed data-driven marketing campaigns across social media platforms, consistently analyzing engagement metrics to optimize content strategy and increase event registration by 30% compared to previous years.
            </p>
          </div>
              
        
          <ProjectGallery 
            images={escendoGallery}
            projectCategory="Marketing"
          />
          
          <div className="leadership-highlights">
            <h4>Key Responsibilities</h4>
            <ul>
              <li>Developed comprehensive brand strategy and visual identity guidelines</li>
              <li>Designed marketing collateral including social media assets, event signage, and merchandise</li>
              <li>Created content strategy and managed editorial calendar across platforms</li>
              <li>Coordinated photography and videography coverage for the event</li>
              <li>Analyzed campaign performance metrics to optimize engagement strategies</li>
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
      
      <div className="contact-cta">
        <h2>Let's Connect</h2>
        <p>I'm always interested in discussing cloud technologies, DevOps practices, and innovative solutions. Whether you're curious about my work at ST Engineering or want to explore potential collaborations, I'd love to connect!</p>
        <a href="mailto:irfansyakir@gmail.com" className="contact-button">Get In Touch</a>
      </div>
    </div>
  );
};

export default About;