import { render, screen } from '@testing-library/react';
import Header from '../Header';

// test('should render same text passed into title prop', () => {
//   render(<Header title="Jottr"/>);
//   const headingElement = screen.getByText(/Jottr/i);
//   expect(headingElement).toBeInTheDocument();
// });

test('should render same text passed into title prop', () => {
  render(<Header title="Jottr"/>);
  const headingElement = screen.getByRole('heading', {name: 'Jottr'});
  expect(headingElement).toBeInTheDocument();
});
