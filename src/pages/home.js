import React from 'react';
import { Link } from 'react-router';
import './home.css';
import profileImage from '../assets/images/about/profile.jpg'; 
import projectsData from '../data/projects.json';
import { getProjectImages } from '../utils/projectImageUtils';

const Home = () => {
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