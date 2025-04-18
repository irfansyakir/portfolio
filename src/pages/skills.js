import React, { useState, useEffect } from 'react';
import './skills.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faLightbulb, faSyncAlt} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Add state to control animation
  const [animate, setAnimate] = useState(false);
  
  // Start animation after component mounts
  useEffect(() => {
    // Small delay to ensure the animation is visible after page loads
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Skills data organized by categories
  const skillsData = {
    programmingLanguages: [
      { name: 'Java', level: 90 },
      { name: 'C/C++', level: 50 },
      { name: 'Python', level: 65 },
      { name: 'JavaScript', level: 80 },
      { name: 'Dart', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'PHP', level: 70 },
      { name: 'Bash/Shell', level: 75 }
    ],
    frameworks: [
      { name: 'React', level: 60 },
      { name: 'React Native', level: 60 },
      { name: 'Flutter', level: 80 },
      { name: 'XAMPP', level: 60 },
      { name: 'Bootstrap', level: 60 },
      { name: 'Node.js', level: 50 },
    ],
    devOps: [
      { name: 'Git', level: 90 },
      { name: 'GitHub/GitLab', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Terraform', level: 75 },
      { name: 'Terraform Cloud', level: 65 },
      { name: 'Digital Ocean', level: 50 },
    ],
    others: [
      { name: 'RESTful APIs', level: 85 },
      { name: 'Database Design', level: 80 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'Branding & Marketing', level: 75 },
      { name: 'Automated Testing', level: 75 },
      { name: 'Machine Learning', level: 65 },
    ]
  };

  // Render skill bar
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
        <p>Here's a comprehensive overview of my technical expertise and proficiency levels</p>
      </div>
      
      <div className="skills-content">
        <div className="skills-section">
          <h2>Programming Languages</h2>
          <div className="skills-list">
            {skillsData.programmingLanguages.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Frameworks & Libraries</h2>
          <div className="skills-list">
            {skillsData.frameworks.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>DevOps & Version Control</h2>
          <div className="skills-list">
            {skillsData.devOps.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Other Technical Skills</h2>
          <div className="skills-list">
            {skillsData.others.map(renderSkillBar)}
          </div>
        </div>
      </div>
      
      <div className="soft-skills-section">
        <h2>Soft Skills</h2>
        <div className="soft-skills-content">
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3>Communication</h3>
            <p>Effectively convey complex technical concepts to both technical and non-technical stakeholders</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>Teamwork</h3>
            <p>Collaborate effectively in cross-functional teams to achieve project goals and deliver quality solutions</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h3>Problem Solving</h3>
            <p>Apply analytical thinking to break down complex problems and develop efficient solutions</p>
          </div>
          
          <div className="soft-skill">
            <div className="soft-skill-icon">
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <h3>Adaptability</h3>
            <p>Quickly adapt to new technologies, environments, and project requirements</p>
          </div>
        </div>
      </div>
      
      {/* <div className="learning-section">
        <h2>Currently Learning</h2>
        <div className="learning-content">
          <div className="learning-item">
            <div className="learning-icon">
              <FontAwesomeIcon icon={faCloud} />
            </div>
            <div className="learning-details">
              <h3>Cloud Architecture</h3>
              <p>Expanding knowledge in cloud-native application design and serverless architectures</p>
            </div>
          </div>
          
          <div className="learning-item">
            <div className="learning-icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <div className="learning-details">
              <h3>Advanced Machine Learning</h3>
              <p>Deepening understanding of neural networks and deep learning techniques</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;