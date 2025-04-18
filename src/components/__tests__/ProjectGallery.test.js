import { render, screen, fireEvent } from '@testing-library/react';
import ProjectGallery from '../projectGallery';

describe('ProjectGallery Component', () => {
  const mockImages = [
    { src: 'test1.jpg', alt: 'Test Image 1', caption: 'Test Caption 1' },
    { src: 'test2.jpg', alt: 'Test Image 2', caption: 'Test Caption 2' },
    { src: 'test3.jpg', alt: 'Test Image 3', caption: 'Test Caption 3' },
  ];

  test('renders gallery with images', () => {
    render(<ProjectGallery images={mockImages} />);
    
    // Check if images are rendered
    const galleryImages = screen.getAllByRole('img');
    expect(galleryImages.length).toBe(mockImages.length);
    
    // Check if captions are rendered
    mockImages.forEach(image => {
      const caption = screen.getByText(image.caption);
      expect(caption).toBeInTheDocument();
    });
  });

  test('renders navigation buttons when there are multiple images', () => {
    render(<ProjectGallery images={mockImages} />);
    
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('applies correct class for mobile app category', () => {
    render(<ProjectGallery images={mockImages} projectCategory="Mobile App" />);
    
    const galleryGrid = screen.getByTestId('gallery-grid');
    expect(galleryGrid).toHaveClass('mobile-app');
  });
});
