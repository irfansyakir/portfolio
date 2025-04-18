import { render, screen } from '@testing-library/react';
import Contact from '../contact';

describe('Contact Page', () => {
  test('renders contact header', () => {
    render(<Contact />);
    
    const headerElement = screen.getByText('Get In Touch');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders contact methods', () => {
    render(<Contact />);
    
    const emailHeading = screen.getByText('Email');
    const linkedinHeading = screen.getByText('LinkedIn');
    const githubHeading = screen.getByText('GitHub');
    
    expect(emailHeading).toBeInTheDocument();
    expect(linkedinHeading).toBeInTheDocument();
    expect(githubHeading).toBeInTheDocument();
  });

  test('renders contact links with correct hrefs', () => {
    render(<Contact />);
    
    const emailLink = screen.getByRole('link', { name: /irfansyakir@gmail.com/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/irfansyakir30/i });
    const githubLink = screen.getByRole('link', { name: /github.com\/irfansyakir/i });
    
    expect(emailLink).toHaveAttribute('href', 'mailto:irfansyakir@gmail.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/irfansyakir30');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/irfansyakir');
  });

  test('renders availability section', () => {
    render(<Contact />);
    
    const availabilityHeading = screen.getByText('Current Availability');
    expect(availabilityHeading).toBeInTheDocument();
    
    const availabilityMessage = screen.getByText(/I'm currently available/i);
    expect(availabilityMessage).toBeInTheDocument();
  });
});
