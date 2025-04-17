import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand } from '@fortawesome/free-solid-svg-icons';
import './projectVideo.css';

const ProjectVideo = ({ videoSrc, poster, projectCategory }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  
  // Check if this is a mobile app project
  const isMobileApp = projectCategory === 'Mobile Development';

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div 
      className={`project-video-container ${isMobileApp ? 'mobile-layout' : 'web-layout'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="project-video"
        src={videoSrc}
        poster={poster}
        playsInline
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className={`video-controls ${showControls ? 'visible' : ''}`}>
        <button className="play-button" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        
        <button className="fullscreen-button" onClick={handleFullscreen} aria-label="Fullscreen">
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
      
      {!isPlaying && (
        <div className="video-overlay" onClick={togglePlay}>
          <button className="play-button-large" aria-label="Play video">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <span className="play-text">Watch Demo</span>
        </div>
      )}
    </div>
  );
};

export default ProjectVideo;