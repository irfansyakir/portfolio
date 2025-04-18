import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Navbar from '../navbar';

// Mock component with Router context
const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar Component', () => {
  test('renders navigation links', () => {
    render(<NavbarWithRouter />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    const skillsLink = screen.getByRole('link', { name: /skills/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('has the correct navigation structure', () => {
    render(<NavbarWithRouter />);
    
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
    
    const navContainer = screen.getByTestId('navbar-container');
    expect(navContainer).toBeInTheDocument();
  });

  test('renders logo text', () => {
    render(<NavbarWithRouter />);
    
    const logoText = screen.getByText(/irfan syakir/i);
    expect(logoText).toBeInTheDocument();
  });
});
