import React, { useState } from 'react';
import { Link } from 'react-router';
import './projects.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';





const Projects = () => {
  // Filter categories
  const categories = ['All', 'Web Development', 'Mobile Development']; //, 'AI/ML'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>Here's a collection of my recent work across various technologies and domains</p>
      </header>
      
      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <span>{project.title}</span>
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <Link to={`/project/${project.id}`} className="btn btn-primary">
                  <FontAwesomeIcon icon={faEye} /> View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Call to Action */}
      <div className="projects-cta">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
      </div>
    </div>
  );
};

export default Projects;