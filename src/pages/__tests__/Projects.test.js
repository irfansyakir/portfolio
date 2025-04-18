import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Projects from '../projects';

// Mock the project data
jest.mock('../../data/projects.json', () => [
  {
    id: 1,
    title: 'Test Project 1',
    description: 'Test Description 1',
    year: '2023',
    technologies: ['React', 'Node.js'],
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Test Project 2',
    description: 'Test Description 2',
    year: '2022',
    technologies: ['Flutter', 'Firebase'],
    category: 'Mobile Development'
  }
]);

// Mock the image utility
jest.mock('../../utils/projectImageUtils', () => ({
  getProjectImages: () => [{src: 'test-image.jpg'}]
}));

// Wrapper component with Router context
const ProjectsWithRouter = () => (
  <BrowserRouter>
    <Projects />
  </BrowserRouter>
);

describe('Projects Component', () => {
  test('renders projects section heading', () => {
    render(<ProjectsWithRouter />);
    
    const headingElement = screen.getByRole('heading', { name: /my projects/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('displays project cards', () => {
    render(<ProjectsWithRouter />);
    
    // Look for project cards by their titles since data-testid is not used
    const projectElements = screen.getAllByText(/Test Project \d/);
    expect(projectElements.length).toBeGreaterThan(0);
  });

  test('each project has a title and description', () => {
    render(<ProjectsWithRouter />);
    
    // Find all project titles and descriptions
    const projectTitles = screen.getAllByText(/Test Project \d/);
    const projectDescriptions = screen.getAllByText(/Test Description \d/);
    
    expect(projectTitles.length).toBe(2);
    expect(projectDescriptions.length).toBe(2);
  });
  
  test('renders filter buttons', () => {
    render(<ProjectsWithRouter />);
    
    const allButton = screen.getByRole('button', { name: /all/i });
    const webButton = screen.getByRole('button', { name: /web development/i });
    const mobileButton = screen.getByRole('button', { name: /mobile development/i });
    
    expect(allButton).toBeInTheDocument();
    expect(webButton).toBeInTheDocument();
    expect(mobileButton).toBeInTheDocument();
  });
});
