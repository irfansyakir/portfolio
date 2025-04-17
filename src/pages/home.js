import React from 'react';
import { Link } from 'react-router';
import './home.css';
import profileImage from '../assets/images/about/profile.jpg'; 
import projectsData from '../data/projects.json';
import { getProjectImages } from '../utils/projectImageUtils';

const Home = () => {
  // // Get the first project as the featured project
  // const featuredProject = projectsData[0];
  // // Get the first image of the featured project
  // const featuredProjectImage = getProjectImages(featuredProject.id)[7]?.src;
  
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Irfan Syakir</h1>
          <h2>Aspiring Software Engineer</h2>
          <p>Building innovative solutions with modern technologies</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Irfan Syakir - Software Engineer" />
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
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>Flutter</li>
              <li>React</li>
              <li>XAMPP</li>
              <li>Node.js</li>

            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>CI/CD</li>
              <li>Terraform</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
        <Link to="/skills" className="view-all">View All Skills →</Link>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Project</h2>
        {/* Get projects marked as featured, or fall back to the first project if none are marked */}
        {(() => {
          // Filter projects that have featured:true property
          const featuredProjects = projectsData.filter(project => project.featured === true);
          
          // If no featured projects are specified, use the first project as default
          const projectsToShow = featuredProjects.length > 0 ? 
            featuredProjects : [projectsData[0]];
            
          return (
            <div className="projects-container">
              <div className={`projects-grid projects-count-${Math.min(projectsToShow.length, 3)}`}>
                
                {/* Display up to 3 featured projects */}
                {projectsToShow.slice(0, 3).map((project, index) => {
                  const projectImage = getProjectImages(project.id)[7]?.src;
                  
                  return (
                    <div className="project-card" key={project.id}>
                      <div className="project-image">
                        {projectImage ? (
                          <img src={projectImage} alt={project.title} />
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </div>
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex}>{tech}</span>
                          ))}
                        </div>
                        <div className="featured-project-link">
                          <Link to={`/project/${project.id}`} className="view-project">View Project</Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
        
        <Link to="/projects" className="view-all">View All Projects →</Link>
      </section>

      {/* Brief About Section */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I'm a final-year Information Engineering & Media student at Nanyang Technological University 
          with a passion for building efficient, user-friendly applications. My experience spans from
          full-stack development to DevOps practices, with a focus on creating innovative solutions.
        </p>
        <Link to="/about" className="view-all">Learn More About Me →</Link>
      </section>
    </div>
  );
};

export default Home;