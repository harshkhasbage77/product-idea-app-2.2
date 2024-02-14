// IconDisplay.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import IconDisplay from './components/IconDisplay';

describe('IconDisplay', () => {
  const iconUrl = 'https://source.unsplash.com/';
  test('renders a placeholder when productIdea is empty', () => {

    render(<IconDisplay iconUrl={iconUrl} productIdea="" />);

    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();

    const placeholder = screen.getByText('Icon Recommendation:');
    expect(placeholder).toBeInTheDocument();
  });

  test('renders the icon for valid productIdea', () => {
    const iconUrl = 'https://source.unsplash.com/';
    const productIdea = 'tshirt';

    render(<IconDisplay iconUrl={iconUrl} productIdea={productIdea} />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.alt).toBe('Category Icon');
  });
});
