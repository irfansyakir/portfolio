import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './projectGallery.css';

const ProjectGallery = ({ images, projectCategory }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Determine if this is a mobile app project
  const isMobileApp = projectCategory === 'Mobile Development';
  
  // Number of images visible at once (can be adjusted based on screen size and project type)
  const visibleImages = isMobileApp 
    ? (window.innerWidth > 1200 ? 4 : window.innerWidth > 768 ? 3 : 1)
    : (window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1);
  
  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateGallery = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  // Calculate item width based on project type
  const itemWidth = isMobileApp ? 200 : 280;
  const itemGap = 16;
  
  // Functions for lightbox navigation
  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images]);

  return (
    <div className="project-gallery">
      <div className={`gallery-grid ${isMobileApp ? 'mobile-app' : ''}`}>
        <div 
          className="gallery-container"
          ref={containerRef}
          style={{ transform: `translateX(-${currentIndex * (itemWidth + itemGap)}px)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item ${isMobileApp ? 'mobile-app' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt || `Project image ${index + 1}`} />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faExpand} />
              </div>
              {image.caption && <div className="gallery-caption">{image.caption}</div>}
            </div>
          ))}
        </div>
      </div>
      
      {/* Gallery Navigation Arrows */}
      <button 
        className="gallery-nav gallery-nav-prev" 
        onClick={() => navigateGallery('prev')}
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      
      <button 
        className="gallery-nav gallery-nav-next" 
        onClick={() => navigateGallery('next')}
        disabled={currentIndex >= images.length - visibleImages}
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt || `Project image ${selectedImage + 1}`} 
              />
              
              {images[selectedImage].caption && (
                <div className="lightbox-caption">{images[selectedImage].caption}</div>
              )}
            </div>
            
            <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;