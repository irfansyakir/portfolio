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
        <p className="subtitle">UX Designer & Business Analyst</p>
      </div>
      
      <div className="about-content">
        <div className="hero-image">
          <img src={profileImage} alt="Irfan Syakir - UX Designer & Business Analyst" />
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm Irfan Syakir, a soon-to-be graduate from Nanyang Technological University 
            with a Bachelor's degree in Information Engineering and Media. I'm passionate about
            creating user-centered experiences using technology that solve real business problems and drive meaningful engagement.
          </p>
          
          <p>
            My journey in design began during my time at Singapore Polytechnic, 
            where I discovered a passion for combining programming, creative problem-solving with analytical thinking. 
            Since then, I've developed expertise spanning software engineering, devops, UX/UI design, visual communication, and data-driven 
            business analysis.
          </p>
          
          <p>
            My approach is both creative and analytical—I leverage design thinking methodologies to understand 
            user needs while applying business analysis skills to ensure solutions deliver measurable value. 
            This hybrid perspective allows me to bridge the gap between user needs and business goals.
          </p>
          
          <p>
            When I'm not designing or analyzing data, you might find me exploring photography, staying updated 
            on design trends, or hiking to find inspiration in nature!
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
            <p>I believe great design starts with understanding users deeply—their needs, motivations, and pain points. This empathetic foundation informs all my design decisions.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3>Purposeful Aesthetics</h3>
            <p>Visual design isn't just about beauty—it's about creating intuitive experiences where every element serves a purpose in guiding users and communicating effectively.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Business Impact</h3>
            <p>I focus on creating designs that not only delight users but also deliver measurable business value through increased engagement, retention, and conversion.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Continuous Iteration</h3>
            <p>Design is never "done"—I embrace an iterative approach driven by user feedback, data analysis, and evolving business needs to continuously improve experiences.</p>
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
              <h3 className="timeline-title">UX/UI Designer & Automation Specialist</h3>
              <p className="timeline-date">May 2024 – Jul 2024</p>
              <p className="timeline-company">ST Engineering</p>
              <ul className="timeline-achievements">
                <li>Conducted user research to identify pain points in existing automation workflows, resulting in a 40% improvement in user satisfaction</li>
                <li>Created intuitive interface designs for technical systems, making complex operations more accessible to non-technical stakeholders</li>
                <li>Designed visual documentation and workflow diagrams that improved cross-team communication and collaboration</li>
                <li>Applied design thinking methodologies to translate user needs into practical automation solutions</li>
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
              <h3 className="timeline-title">User Experience Analyst</h3>
              <p className="timeline-date">Sep 2019 – Feb 2020</p>
              <p className="timeline-company">Accenture</p>
              <ul className="timeline-achievements">
                <li>Conducted usability testing on government client systems to identify user experience issues and opportunities</li>
                <li>Created wireframes and low-fidelity prototypes to demonstrate improved user flows and interfaces</li>
                <li>Collaborated with visual designers to ensure consistent brand application across digital interfaces</li>
                <li>Produced user experience documentation including persona profiles and interaction patterns</li>
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
                <li>Specialized in Software Engineering, UX/UI Design, Digital Media, and Branding & Marketing</li>
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
        <h2>Design Philosophy</h2>
        <div className="philosophy-content">
          <p>
            I believe that exceptional design exists at the intersection of user needs, business goals, and technological possibilities. 
            My approach is rooted in empathy—understanding the people who will use the product—combined with analytical rigor to ensure 
            solutions deliver measurable business impact.
          </p>
          <p>
            Good design should feel intuitive and effortless to users while strategically advancing business objectives. Whether I'm designing 
            a mobile app interface, visualizing complex data, or mapping user journeys, I focus on creating experiences that are both purposeful 
            and delightful.
          </p>
          <p>
            My process involves continuous iteration informed by user feedback, analytics, and business metrics. I'm driven by the belief that 
            design is never truly "finished"—there's always an opportunity to learn, refine, and improve based on real-world usage and evolving needs.
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
        <p>I'm currently looking for opportunities in software engineering, digital marketing, UX/UI design and business analysis roles where I can create meaningful digital experiences and drive business value. If you're interested in collaborating or learning more about my work, I'd love to connect!</p>
        <a href="mailto:irfansyakir@gmail.com" className="contact-button">Get In Touch</a>
      </div>
    </div>
  );
};

export default About;