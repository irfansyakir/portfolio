import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import './projectDetail.css';
import '../components/projectGallery.css';
import ProjectGallery from '../components/projectGallery';
import ProjectVideo from '../components/projectVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink, faArrowLeft, faFolder } from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';
import { getProjectImages, getProjectVideo } from '../utils/projectImageUtils';

// Format paragraph text into individual sentences on new lines
const formatSentences = (text) => {
  if (!text) return null;
  
  // Split text into sentences
  const sentences = text.split(/(?<=[.!?])\s+/g);
  
  return (
    <>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence}
          {index < sentences.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="project-detail-container">
        <div className="project-detail-loading">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-container">
        <Link to="/projects" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
        <div className="project-not-found">Project not found</div>
      </div>
    );
  }

  // Get the images and video for this project
  const projectImages = getProjectImages(project.id);
  const projectVideo = getProjectVideo(project.id);

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
      </Link>
      
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className="project-year">{project.year}</span>
      </div>
      
      {/* Project Video (if available) */}
      {projectVideo && (
        <div className="project-video-section">
          <h2>Demo Video</h2>
          <ProjectVideo 
            videoSrc={projectVideo} 
            poster={projectImages[0]?.src}
            projectCategory={project.category} 
          />
        </div>
      )}
      
      {/* Project Gallery */}
      <ProjectGallery 
        images={projectImages} 
        projectCategory={project.category}
      />
      
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
                  <p>{formatSentences(project.challenges)}</p>
                </div>
              )}
              
              {project.solutions && (
                <div className="solutions">
                  <h2>Solutions</h2>
                  <p>{formatSentences(project.solutions)}</p>
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
            <div className="project-links-title">Project Links</div>
            <div className="links-container">
              {project.github && (
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              )}
              
              {(project.link && project.link !="#") && (
                <a href={project.link} className="project-link live" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLink} /> Live Demo (WebApp Version)
                </a>
              )}
            </div>
          </div>
          
          <div className="project-category">
            <h3>Category</h3>
            <p><FontAwesomeIcon icon={faFolder} /> {project.category}</p>
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