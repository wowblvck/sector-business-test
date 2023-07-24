import { render } from '@testing-library/react';
import RootLayout from '@layouts/RootLayout';
import { vi } from 'vitest';

describe('RootLayout', () => {
  test('render the layout component', () => {
    const { container } = render(<RootLayout />);
    expect(container).toBeInTheDocument();
  });
  test('should render the Content component with correct padding > xs breakpoint', () => {
    const { getByTestId } = render(<RootLayout />);
    const contentElement = getByTestId('main-content');
    expect(contentElement).toHaveStyle('padding: 23px 77px;');
  });
  test('should render the Content component with correct padding > xs breakpoint', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query !== '(min-width: 240px) and (max-width: 767px)',
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));
    const { getByTestId } = render(<RootLayout />);
    const contentElement = getByTestId('main-content');
    expect(contentElement).toHaveStyle('padding: 23px 20px;');
  });
});
