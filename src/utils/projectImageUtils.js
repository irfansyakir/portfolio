// Import all project images and videos
import ff1 from '../assets/images/projects/fourierForge/fourierforge1.png';
import ff2 from '../assets/images/projects/fourierForge/fourierforge2.png';
import ff3 from '../assets/images/projects/fourierForge/fourierforge3.png';
import ff4 from '../assets/images/projects/fourierForge/fourierforge4.png';
import ff5 from '../assets/images/projects/fourierForge/fourierforge5.png';
import ff6 from '../assets/images/projects/fourierForge/fourierforge6.png';
import ff7 from '../assets/images/projects/fourierForge/fourierforge7.png';
import ffprojectImage from '../assets/images/projects/fourierForge/projectImage.png';
import ffVideo from '../assets/videos/fourierForge/fourierforge-demo.mp4';

// import js1 from '../assets/images/projects/jamStream/jamstream1.png';
// import js2 from '../assets/images/projects/jamStream/jamstream2.png';

import op1 from '../assets/images/projects/opusCinemas/opuscinemas1.jpg';
import op2 from '../assets/images/projects/opusCinemas/opuscinemas2.jpg';
import op3 from '../assets/images/projects/opusCinemas/opuscinemas3.jpg';
import op4 from '../assets/images/projects/opusCinemas/opuscinemas4.jpg';
import op5 from '../assets/images/projects/opusCinemas/opuscinemas5.jpg';
import op6 from '../assets/images/projects/opusCinemas/opuscinemas6.jpg';
import op7 from '../assets/images/projects/opusCinemas/opuscinemas7.jpg';
import opprojectImage from '../assets/images/projects/opusCinemas/projectImage.jpg';
import opVideo from '../assets/videos/opusCinemas/opuscinemas-demo.mp4';

/**
 * Returns the demo video URL for a project if available
 * @param {number} projectId - The ID of the project
 * @returns {string|null} URL to the video or null if not available
 */
export const getProjectVideo = (projectId) => {
  switch (projectId) {
    case 1:
      return ffVideo;
    case 4:
      return opVideo;
    default:
      return null;
  }
};

/**
 * Returns an array of image objects based on the project ID
 * @param {number} projectId - The ID of the project
 * @returns {Array} Array of image objects with src, alt, and caption properties
 */
export const getProjectImages = (projectId) => {
  // Return different sets of images based on project ID
  if (projectId === 1) {
    return [
      { 
        src: ff1, 
        alt: "Fourier Forge Main Interface", 
        caption: "Main Interface"
      },
      { 
        src: ff2, 
        alt: "Fourier Forge Feature 1", 
        caption: "Problem Solver Input Parameters 1"
      },
      { 
        src: ff3, 
        alt: "Fourier Forge Feature 2", 
        caption: "Problem Solver Input Parameters 2"
      },
      { 
        src: ff4, 
        alt: "Fourier Forge Mobile View", 
        caption: "Signal Visualisation"
      },
      { 
        src: ff5, 
        alt: "Fourier Forge Data Flow", 
        caption: "Step by Step Solutions 1"
      },
      {
        src: ff6,
        alt: "Fourier Forge Additional View",
        caption: "Step by Step Solutions 2"
      },
      {
        src: ff7,
        alt: "Fourier Forge Results Screen",
        caption: "Step by Step Solutions 3"
      },
      {
        src: ffprojectImage,
        alt: "Fourier Forge Results Screen",
        caption: "Splash Screen"
      }
    ];
  } else if (projectId === 4) {
    return [
      {
        src: op1,
        alt: "Home Page",
        caption: "Home Page"
      },
      {
        src: op2,
        alt: "Cinemas",
        caption: "Cinemas"
      },
      {
        src: op3,
        alt: "Individual Movie",
        caption: "Individual Movie"
      },
      {
        src: op4,
        alt: "Ticket Booking",
        caption: "Ticket Booking"
      },
      {
        src: op5,
        alt: "Payment",
        caption: "Payment"
      },
      {
        src: op6,
        alt: "Upcoming Movies",
        caption: "Upcoming Movies"
      },
      {
        src: op7,
        alt: "Contact Us",
        caption: "Contact Us"
      },
      {
        src: opprojectImage,
        alt: "Contact Us",
        caption: "Contact Us"
      },
      
    ];
  } else {
    // Default placeholder images for other projects
    return [
      { 
        src: "https://via.placeholder.com/800x600?text=Project+Preview", 
        alt: "Project Preview", 
        caption: "Project Preview"
      },
      { 
        src: "https://via.placeholder.com/800x600?text=Feature+1", 
        alt: "Feature 1", 
        caption: "Key Feature 1"
      },
      { 
        src: "https://via.placeholder.com/800x600?text=Feature+2", 
        alt: "Feature 2", 
        caption: "Key Feature 2"
      }
    ];
  }
};