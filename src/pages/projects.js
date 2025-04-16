import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  // Filter categories
  const categories = ['All', 'Web Development', 'Mobile Development']; //, 'AI/ML'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data
  const projectsData = [
    {
      id: 1,
      title: 'Fourier Forge',
      description: 'A mobile application developed for solving Fourier series exam questions, providing step-by-step solutions. The app incorporates UI/UX design principles and color theory to create an intuitive user experience.',
      technologies: ['Flutter', 'Dart', 'Mathematics'],
      category: 'Mobile Development',
      image: 'placeholder-fourier.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/fourierforge',
      year: '2024'
    },
    {
      id: 2,
      title: 'Opus-Cinemas',
      description: 'A premium movie booking web application featuring real-time seat selection and secure payment processing with multiple options. Users can browse detailed film listings, watch trailers, and receive personalized recommendations based on preferences and viewing history.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
      category: 'Web Development',
      image: 'placeholder-opus-cinemas.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/opus-cinemas',
      year: '2024'
    },
    {
      id: 3,
      title: 'JamStream',
      description: 'A music streaming mobile application similar to Spotify with added social functionalities including interactive chatrooms. The goal was to increase user engagement and satisfaction through social interaction. Integrated Spotify\'s Developer API and used Firebase for backend services.',
      technologies: ['React', 'JavaScript', 'Firebase', 'Spotify API'],
      category: 'Web Development',
      image: 'placeholder-jamstream.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/DIP-Group-4',
      year: '2023'
    },
    /* Temporarily commented out AI/ML projects
    {
      id: 4,
      title: 'Dogs vs Cats Classification',
      description: 'Implemented multiple deep learning models including VGG16, ResNet, and GoogLeNet to classify images of dogs and cats, achieving highest accuracy of 99.75% with GoogLeNet architecture. Applied data preprocessing techniques including image resizing, normalization, and augmentation.',
      technologies: ['Python', 'TensorFlow', 'Deep Learning'],
      category: 'AI/ML',
      image: 'placeholder-dogs-cats.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/dogs-cats-classification',
      year: '2024'
    },
    {
      id: 5,
      title: 'Cardiovascular Disease Prediction',
      description: 'Analyzed large datasets from Kaggle and implemented three machine learning models (Decision Tree, Random Forest, Logistic Regression) to predict tendency of patients suffering from cardiovascular disease. Achieved 70% prediction accuracy with Random Forest.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      category: 'AI/ML',
      image: 'placeholder-cardiovascular.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/cardio-prediction',
      year: '2023'
    },
    */
    {
      id: 4,  // Updated ID to maintain sequence
      title: 'OldEgg E-commerce',
      description: 'Created a web-based application for establishing an e-commerce platform specializing in the sale of computer parts. Utilized back-end programming to manage databases using MySQL.',
      technologies: ['Java Servlet', 'Apache Tomcat', 'MySQL', 'HTML', 'CSS'],
      category: 'Web Development',
      image: 'placeholder-oldegg.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/oldegg',
      year: '2023'
    },
    {
      id: 5,  // Updated ID to maintain sequence
      title: 'Bahoot! Quiz App',
      description: 'Developed a mobile application resembling Kahoot! using Java Programming. Deployed React.js with MySQL and RESTful APIs to construct a complementary web application.',
      technologies: ['Java', 'Android Studio', 'React.js', 'MySQL', 'RESTful APIs'],
      category: 'Mobile Development',
      image: 'placeholder-bahoot.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/bahoot',
      year: '2023'
    },
    {
      id: 6,  // Updated ID to maintain sequence
      title: 'Minesweeper Game',
      description: 'Applied Java Programming to build a Minesweeper Game with unique features including difficulty levels, sound effects, custom textures, and exporting of scores, using Object-Oriented Programming principles.',
      technologies: ['Java', 'OOP', 'GUI Development'],
      category: 'Web Development',
      image: 'placeholder-minesweeper.jpg',
      link: '#',
      github: 'https://github.com/irfansyakir/OOP-Minesweeper',
      year: '2023'
    }
  ];

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
              {/* Replace with actual image: <img src={project.image} alt={project.title} /> */}
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
                {project.github && (
                  <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Call to Action */}
      <div className="projects-cta">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        <a href="/contact" className="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  );
};

export default Projects;