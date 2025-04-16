import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import profileImage from '../assets/images/profile.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Irfan Syakir</h1>
          <h2>Inspiring Software Engineer</h2>
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
            <h3>Frameworks</h3>
            <ul>
              <li>Flutter</li>
              <li>React</li>
              <li>XAMPP</li>
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
        <div className="projects-grid">
        
          {/* Project 1*/}
          <div className="project-card">
            <div className="project-image">
              <span>Fourier Forge</span>
            </div>
            <div className="project-info">
              <h3>Fourier Forge</h3>
              <p>Educational mobile application to help engineering students master the concepts of Fourier Series</p>
              <div className="project-tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Mathematics</span>
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
          with a passion for building efficient, user-friendly applications. My experience spans from
          full-stack development to DevOps practices, with a focus on creating innovative solutions.
        </p>
        <Link to="/about" className="view-all">Learn More About Me →</Link>
      </section>
    </div>
  );
};

export default Home;