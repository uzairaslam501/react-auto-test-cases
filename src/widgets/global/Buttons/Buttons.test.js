import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Buttons from './Buttons';

test('renders Buttons component', () => {
  render(<Buttons label="Test Label" />);
  const element = screen.getByText(/test label/i);
  expect(element).toBeInTheDocument();
});
