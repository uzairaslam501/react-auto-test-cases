import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTables from './DataTables';

test('renders DataTables component', () => {
  render(<DataTables label="Test Label" />);
  const element = screen.getByText(/test label/i);
  expect(element).toBeInTheDocument();
});
