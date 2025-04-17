import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const nameElement = screen.getByText(/Irfan Syakir/i, { selector: '.logo-text' });
  expect(nameElement).toBeInTheDocument();
});

