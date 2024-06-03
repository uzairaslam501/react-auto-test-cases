import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';

test('renders ProductList component', () => {
  render(<ProductList label="Test Label" />);
  const element = screen.getByText(/test label/i);
  expect(element).toBeInTheDocument();
});
