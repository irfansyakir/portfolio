/**
 * Project Image Utilities
 * 
 * This module handles dynamic loading of project media assets (images and videos)
 * based on configuration from projectsMedia.json.
 * 
 * The JSON configuration format:
 * - Each project is identified by its ID as the top level key
 * - dir: The directory name for this project's assets
 * - extension: File extension for image files (jpg, png, etc)
 * - videoName: Name of the demo video file
 * - captions: Array of captions for each image in order (1, 2, 3, etc)
 *
 * To add a new project:
 * 1. Add a new entry to projectsMedia.json with the appropriate configuration
 * 2. Make sure the images follow the naming convention: {dirLowercase}{number}.{extension}
 * 3. Place project thumbnail as "projectImage.{extension}"
 */

// Import project media configuration
import projectDirs from '../data/projectsMedia.json';

// Function to dynamically import images
function importImage(projectId, imageNumber) {
  const project = projectDirs[projectId];
  if (!project) return null;

  const { dir, extension } = project;
  const dirLower = dir.toLowerCase();
  
  try {
    // All project images are now standardized to "projectImage.{extension}"
    if (imageNumber === 'projectImage') {
      return require(`../assets/images/projects/${dir}/projectImage.${extension}`);
    }
    
    // Regular numbered images
    return require(`../assets/images/projects/${dir}/${dirLower}${imageNumber}.${extension}`);
  } catch (e) {
    console.error(`Failed to load image ${imageNumber} for project ${projectId}:`, e);
    return null;
  }
}

// Function to dynamically import videos
function importVideo(projectId) {
  const project = projectDirs[projectId];
  if (!project) return null;
  
  try {
    return require(`../assets/videos/${project.dir}/${project.videoName}`);
  } catch (e) {
    console.error(`Failed to load video for project ${projectId}:`, e);
    return null;
  }
}

/**
 * Returns the demo video URL for a project if available
 * @param {number} projectId - The ID of the project
 * @returns {string|null} URL to the video or null if not available
 */
export const getProjectVideo = (projectId) => {
  return importVideo(projectId);
};

/**
 * Returns an array of image objects based on the project ID
 * @param {number} projectId - The ID of the project
 * @returns {Array} Array of image objects with src, alt, and caption properties
 */
export const getProjectImages = (projectId) => {
  const project = projectDirs[projectId];
  
  // Return default placeholder images for unknown projects
  if (!project) {
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
  
  const { dir, captions } = project;
  const images = [];
  
  // Determine how many images to attempt loading based on captions length
  const maxImages = Math.min(captions.length, 10); // Limit to 10 images max
  
  // Import the regular numbered images
  for (let i = 1; i <= maxImages; i++) {
    const img = importImage(projectId, i);
    if (img) {
      images.push({
        src: img,
        alt: `${dir} ${captions[i-1]}`,
        caption: captions[i-1]
      });
    }
  }
  
  // Add the project image if available (usually used as thumbnail)
  const projectImage = importImage(projectId, 'projectImage');
  if (projectImage && images.length < captions.length) {
    images.push({
      src: projectImage,
      alt: `${dir} Splash Screen`,
      caption: captions[images.length] || "Splash Screen"
    });
  }
  
  return images;
};