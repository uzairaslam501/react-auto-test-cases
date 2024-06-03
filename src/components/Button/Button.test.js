import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders Button component', () => {
  render(<Button label="Test Label" />);
  const element = screen.getByText(/test label/i);
  expect(element).toBeInTheDocument();
});
