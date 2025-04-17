import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import './projectDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';

// This component will be used to display a detailed view of a specific project
const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from URL params
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
      </Link>
      
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className="project-year">{project.year}</span>
      </div>
      
      <div className="project-detail-image">
        <span>{project.title}</span>
      </div>
      
      <div className="project-detail-content">
        <div className="project-detail-main">
          <div className="project-overview">
            <h2>Project Overview</h2>
            <p>{project.longDescription || project.description}</p>
          </div>
          
          <div className="project-features">
            <h2>Key Features</h2>
            {project.features && (
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          
          {(project.challenges || project.solutions) && (
            <div className="project-challenges-solutions">
              {project.challenges && (
                <div className="challenges">
                  <h2>Challenges</h2>
                  <p>{project.challenges}</p>
                </div>
              )}
              
              {project.solutions && (
                <div className="solutions">
                  <h2>Solutions</h2>
                  <p>{project.solutions}</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="project-detail-sidebar">
          <div className="project-technologies">
            <h3>Technologies Used</h3>
            <div className="technology-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-links">
            <h3>Project Links</h3>
            <div className="links-container">
              {project.github && (
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub Repository
                </a>
              )}
              
              {project.link && (
                <a href={project.link} className="project-link live" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLink} /> Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="project-category">
            <h3>Category</h3>
            <p>{project.category}</p>
          </div>
        </div>
      </div>
      
      <div className="other-projects">
        <h2>Explore Other Projects</h2>
        <Link to="/projects" className="view-all-projects">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
