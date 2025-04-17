import React from 'react';
import './skills.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faLightbulb, faSyncAlt} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Skills data organized by categories
  const skillsData = {
    programmingLanguages: [
      { name: 'Java', level: 90 },
      { name: 'C/C++', level: 60 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'Dart', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'PHP', level: 70 },
      { name: 'Bash/Shell', level: 65 }
    ],
    frameworks: [
      { name: 'React', level: 85 },
      { name: 'Flutter', level: 80 },
      { name: 'React Native', level: 75 },
      { name: 'Node.js', level: 70 },
    ],
    devOps: [
      { name: 'Git', level: 90 },
      { name: 'GitHub/GitLab', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Terraform', level: 75 },
    ],
    others: [
      { name: 'RESTful APIs', level: 85 },
      { name: 'Database Design', level: 80 },
      { name: 'UI/UX Design', level: 75 },
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
          style={{ width: `${skill.level}%` }}
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