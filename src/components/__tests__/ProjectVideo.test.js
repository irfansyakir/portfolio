import { render, screen, fireEvent } from '@testing-library/react';
import ProjectVideo from '../projectVideo';

describe('ProjectVideo Component', () => {
  const mockVideoSrc = 'test-video.mp4';
  const mockPoster = 'test-poster.jpg';

  test('renders video player with correct source', () => {
    render(<ProjectVideo videoSrc={mockVideoSrc} poster={mockPoster} />);
    
    const video = screen.getByTestId('project-video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', mockVideoSrc);
    expect(video).toHaveAttribute('poster', mockPoster);
  });

  test('applies correct layout class for mobile app category', () => {
    render(<ProjectVideo videoSrc={mockVideoSrc} projectCategory="Mobile App" />);
    
    const videoContainer = screen.getByTestId('project-video-container');
    expect(videoContainer).toHaveClass('mobile-layout');
  });

  test('applies web layout by default', () => {
    render(<ProjectVideo videoSrc={mockVideoSrc} />);
    
    const videoContainer = screen.getByTestId('project-video-container');
    expect(videoContainer).toHaveClass('web-layout');
  });

  test('renders play button overlay', () => {
    render(<ProjectVideo videoSrc={mockVideoSrc} />);
    
    const playButton = screen.getByRole('button', { name: /play video/i });
    expect(playButton).toBeInTheDocument();
  });
});
