import React, { useState } from 'react';
import { Link } from 'react-router';
import './projects.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';
import { getProjectImages } from '../utils/projectImageUtils';

const Projects = () => {
  // Filter categories
  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'Others'];
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Add state for sort method
  const [sortMethod, setSortMethod] = useState('id'); // Default sort by id

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
    
  // Sort the filtered projects based on the selected sort method
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortMethod === 'year-desc') {
      // Sort by year descending (newest first)
      return parseInt(b.year) - parseInt(a.year);
    }
    else if (sortMethod === 'year-asc') {
      // Sort by year ascending (oldest first)
      return parseInt(a.year) - parseInt(b.year);
    }
    // Default sort by id
    return a.id - b.id;
  });

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>Here's a collection of my recent work across various technologies and domains</p>
      </header>
      
      {/* Filter and Sort Container */}
      <div className="filter-sort-container">
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
        
        <div className="sort-container">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="sort-select"
          >
            <option value="id">Default</option>
            <option value="year-desc">Year (Newest First)</option>
            <option value="year-asc">Year (Oldest First)</option>
          </select>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {sortedProjects.map(project => {
          // Get the first image for this project
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
          );
        })}
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