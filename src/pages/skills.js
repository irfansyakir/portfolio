import React, { useState, useEffect } from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faComments, 
  faUsers, 
  faLightbulb, 
  faSyncAlt, 
  faCode,
  faServer,
  faChartLine, 
  faNetworkWired,
  faPencilRuler, 
  faPalette, 
  faBullhorn,
  faChartPie,
  faBook
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Updated skills data for multiple roles
  const skillsData = {
    softwareEngineering: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 65 },
      { name: 'JavaScript', level: 80 },
      { name: 'Flutter/Dart', level: 75 },
      { name: 'Data Structures & Algorithms', level: 80 },
      { name: 'OOP Principles', level: 85 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Database Design', level: 80 }
    ],
    devOpsSkills: [
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Infrastructure as Code', level: 80 },
      { name: 'Terraform', level: 75 },
      { name: 'Docker', level: 65 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Cloud Services', level: 70 },
      { name: 'System Monitoring', level: 75 },
      { name: 'Automated Testing', level: 80 }
    ],
    designSkills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Wireframing & Prototyping', level: 80 },
      { name: 'Visual Design', level: 75 },
      { name: 'User Research', level: 70 },
      { name: 'Information Architecture', level: 75 },
      { name: 'Interaction Design', level: 80 },
      { name: 'Mobile App Design', level: 85 }
    ],
    businessSkills: [
      { name: 'Requirements Gathering', level: 85 },
      { name: 'Marketing', level: 70},
      { name: 'Process Optimization', level: 80 },
      { name: 'Data Visualization', level: 75 },
      { name: 'Stakeholder Management', level: 80 },
      { name: 'User Story Mapping', level: 75 },
      { name: 'Technical Documentation', level: 85 },
      { name: 'Project Planning', level: 80 }
    ]
  };

  const renderSkillBar = (skill) => (
    <div className="skill-item" key={skill.name}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>Combining software engineering expertise, DevOps practices, creative design thinking, and analytical problem-solving to deliver robust and user-centered solutions</p>
      </div>
      
      <div className="skills-content">
        <div className="skills-section">
          <h2>Software Engineering</h2>
          <div className="skills-list">
            {skillsData.softwareEngineering.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>DevOps & Infrastructure</h2>
          <div className="skills-list">
            {skillsData.devOpsSkills.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Design & User Experience</h2>
          <div className="skills-list">
            {skillsData.designSkills.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Business & Project Management</h2>
          <div className="skills-list">
            {skillsData.businessSkills.map(renderSkillBar)}
          </div>
        </div>
      </div>
      
      <div className="design-process-section">
        <h2>My Problem-Solving Approach</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Research & Discovery</h3>
              <p>Begin by deeply understanding technical requirements, user needs, business goals, and system constraints through stakeholder interviews and systematic analysis.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Define & Architecture</h3>
              <p>Develop clear requirements, technical specifications, system diagrams, and implementation plans that will guide the development process.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Design & Prototype</h3>
              <p>Create technical solutions, design interfaces, and develop proof-of-concept implementations to validate approaches before full development.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Implement & Test</h3>
              <p>Develop robust code with proper testing methodologies, conduct thorough quality assurance, and implement automated validation processes.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">05</div>
            <div className="step-content">
              <h3>Deploy & Monitor</h3>
              <p>Implement CI/CD pipelines for reliable deployment, establish monitoring systems, and ensure smooth operations in production environments.</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">06</div>
            <div className="step-content">
              <h3>Analyze & Optimize</h3>
              <p>Continuously evaluate performance metrics, gather user feedback, and implement improvements based on real-world usage patterns.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="soft-skills-section">
        <h2>Professional Strengths</h2>
        <div className="soft-skills-content">
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3>Communication</h3>
            <p>Skilled at translating complex technical concepts into clear explanations for both technical and non-technical stakeholders</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Collaboration</h3>
            <p>Experienced in working effectively across cross-functional teams to deliver integrated solutions that meet diverse requirements</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Problem Solving</h3>
            <p>Adept at approaching complex technical challenges systematically to develop efficient and scalable solutions</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <h3>Adaptability</h3>
            <p>Quick to learn new technologies, methodologies, and frameworks while maintaining flexibility in rapidly changing environments</p>
          </div>
        </div>
      </div>
      
      <div className="specialised-skills">
        <h2>Specialised Expertise</h2>
        <div className="specialised-grid">
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Software Architecture</h3>
            <p>Designing modular, maintainable code structures and system components that enable scalability and efficient development workflows</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <h3>Infrastructure Automation</h3>
            <p>Implementing infrastructure as code and automated deployment pipelines that ensure consistent, reliable system operations</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faPencilRuler} />
            </div>
            <h3>UI/UX Design</h3>
            <p>Creating intuitive user interfaces and experiences that balance aesthetic appeal with functional efficiency to enhance user engagement and satisfaction</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3>Brand Development</h3>
            <p>Crafting cohesive visual identities and design systems that effectively communicate brand values and maintain consistency across digital platforms</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Data Analysis</h3>
            <p>Transforming raw data into meaningful insights through effective processing, visualization, and analytical techniques</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
            <h3>Digital Marketing</h3>
            <p>Implementing targeted campaigns and content strategies that drive engagement, optimize conversion funnels, and achieve measurable business outcomes</p>
          </div>
          
          <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faNetworkWired} />
            </div>
            <h3>System Integration</h3>
            <p>Connecting disparate technologies and platforms to create cohesive solutions that enable seamless data flow and functionality</p>
          </div>

           <div className="specialised-item">
            <div className="specialised-icon">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <h3>Technical Writing</h3>
            <p>Creating clear, concise documentation and tutorials to support onboarding, stakeholder clarity, and long-term project maintainability.</p>
          </div>
        </div>
      </div>
      
      <div className="certification-section">
        <h2>Core Competencies</h2>
        <div className="certification-items">
          <div className="certification-item">
            <div className="certification-badge">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="certification-details">
              <h3>Software Development</h3>
              <p>Gained through multiple full-stack projects (2020-2025)</p>
              <p>Proficient in designing and implementing efficient, scalable applications using modern frameworks and best practices</p>
            </div>
          </div>
          
          <div className="certification-item">
            <div className="certification-badge">
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
            <div className="certification-details">
              <h3>Branding & Marketing</h3>
              <p>Vice President (Branding & Marketing) at NTU Escendo (2024-2025)</p>
              <p>Created comprehensive brand strategies, visual identity systems, and marketing campaigns that increased event participation by 30%</p>
            </div>
          </div>
          
          <div className="certification-item">
            <div className="certification-badge">
              <FontAwesomeIcon icon={faChartPie} />
            </div>
            <div className="certification-details">
              <h3>Business Analysis</h3>
              <p>Applied across multiple academic and professional projects (2022-2025)</p>
              <p>Expert in requirements gathering, stakeholder management, process mapping, and translating business needs into technical specifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;