import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import App from '../App';
import React from 'react';

// Mock matchMedia for framer-motion/react
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('App Component', () => {
  it('renders without crashing', () => {
    const { getAllByText } = render(<App />);
    
    // AETHER logo should be in the header
    expect(getAllByText('AETHER')[0]).toBeInTheDocument();
  });
});
