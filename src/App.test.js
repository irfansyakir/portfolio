import { render, screen } from '@testing-library/react';
import App from './App';


// Mock React Router DOM
jest.mock('react-router', () => ({
  BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: () => <div data-testid="route" />,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  useParams: () => ({}),
  useLocation: () => ({ pathname: '/' })
}));

test('renders portfolio navbar with developer name', () => {
  render(<App />);
  
  // Check for the developer name in the navbar using a more specific selector
  const navbarNameElement = screen.getByText(/Irfan Syakir/i, { selector: '.logo-text' });
  expect(navbarNameElement).toBeInTheDocument();
  
  // Check for the developer name in the footer
  const footerNameElement = screen.getByText(/Irfan Syakir/i, { selector: '.footer-logo' });
  expect(footerNameElement).toBeInTheDocument();
  
  // Check for main navigation links
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

