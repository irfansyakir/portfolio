import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Irfan Syakir</h1>
          <h2>Software Engineer & DevOps Enthusiast</h2>
          <p>Building innovative solutions with modern technologies</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* You'll add your professional photo here */}
          <div className="placeholder-image">
            <span>Your Photo</span>
          </div>
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
              <li>React</li>
              <li>Flutter</li>
              <li>Node.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>CI/CD</li>
              <li>Terraform</li>
              <li>Azure</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <Link to="/skills" className="view-all">View All Skills →</Link>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <span>Opus-Cinemas</span>
            </div>
            <div className="project-info">
              <h3>Opus-Cinemas</h3>
              <p>Premium movie booking web application with real-time seat selection and secure payment processing</p>
              <div className="project-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <span>JamStream</span>
            </div>
            <div className="project-info">
              <h3>JamStream</h3>
              <p>Music streaming mobile application with social features including interactive chatrooms</p>
              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>Spotify API</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <span>Fourier Series App</span>
            </div>
            <div className="project-info">
              <h3>Fourier Series Solver</h3>
              <p>Mobile app for solving Fourier series exam questions with step-by-step solutions</p>
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