import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Home from '../../pages/home';

// Mock the image imports
jest.mock('../../assets/images/about/profile.jpg', () => 'mocked-profile.jpg');
jest.mock('../../utils/projectImageUtils', () => ({
  getProjectImages: () => [{src: 'mocked-image.jpg'}]
}));
jest.mock('../../data/projects.json', () => [
  {
    id: 1,
    title: 'Test Project',
    description: 'This is a test project',
    technologies: ['React', 'Node', 'MongoDB']
  }
]);

// Wrap with Router since Home uses Link components
const HomeWithRouter = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe('Home Page', () => {
  test('renders hero section with name and title', () => {
    render(<HomeWithRouter />);
    
    const nameElement = screen.getByText('Irfan Syakir');
    const titleElement = screen.getByText('Aspiring Software Engineer');
    
    expect(nameElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  test('renders skills section', () => {
    render(<HomeWithRouter />);
    
    const skillsHeading = screen.getByText('Technical Expertise');
    expect(skillsHeading).toBeInTheDocument();
    
    const languagesHeading = screen.getByText('Languages');
    const frameworksHeading = screen.getByText('Frameworks & Libraries');
    const devOpsHeading = screen.getByText('DevOps');
    
    expect(languagesHeading).toBeInTheDocument();
    expect(frameworksHeading).toBeInTheDocument();
    expect(devOpsHeading).toBeInTheDocument();
  });

  test('renders featured project section', () => {
    render(<HomeWithRouter />);
    
    const projectHeading = screen.getByText('Featured Project');
    expect(projectHeading).toBeInTheDocument();
    
    const projectTitle = screen.getByText('Test Project');
    expect(projectTitle).toBeInTheDocument();
  });

  test('renders about section', () => {
    render(<HomeWithRouter />);
    
    const aboutHeading = screen.getByText('About Me');
    expect(aboutHeading).toBeInTheDocument();
  });
});
