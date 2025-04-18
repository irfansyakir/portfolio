import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Footer from '../footer';

// Wrap component with Router since it contains Link components
const FooterWithRouter = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

describe('Footer Component', () => {
  test('renders name in the footer', () => {
    render(<FooterWithRouter />);
    
    const nameElement = screen.getByText('Irfan Syakir');
    expect(nameElement).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<FooterWithRouter />);
    
    // Check for GitHub, LinkedIn, and Email links
    const socialLinks = screen.getAllByRole('link', { name: /github|linkedin|email/i });
    expect(socialLinks.length).toBe(3);
  });

  test('renders quick links', () => {
    render(<FooterWithRouter />);
    
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

  test('renders credit message', () => {
    render(<FooterWithRouter />);
    
    const creditElement = screen.getByText(/designed & built with ❤️/i);
    expect(creditElement).toBeInTheDocument();
  });
});
