import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand } from '@fortawesome/free-solid-svg-icons';
import './projectVideo.css';

const ProjectVideo = ({ videoSrc, poster, verticalVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  
  // Check if this is a mobile app project
  const isVerticalVideo = verticalVideo === 'true';

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const progressBar = e.currentTarget;
    const pos = (e.pageX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    const newTime = pos * duration;
    
    if (videoRef.current && !isNaN(newTime)) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div 
      className={`project-video-container ${isVerticalVideo ? 'mobile-layout' : 'web-layout'}`}
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
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      <div className={`video-controls ${showControls ? 'visible' : ''}`}>
        <button className="play-button" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        
        <div className="time-controls">
          <div className="time-display">{formatTime(currentTime)} / {formatTime(duration)}</div>
          <div className="progress-bar-container" onClick={handleSeek}>
            <div className="progress-bar-background"></div>
            <div 
              className="progress-bar-current" 
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            ></div>
          </div>
        </div>
        
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