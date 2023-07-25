import { api } from '@api/api';
import handlers from '@mocks/handlers';
import { setupStore } from '@store/store';
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { vi } from 'vitest';

const { getComputedStyle } = window;

const store = setupStore();

configure({
  computedStyleSupportsPseudoElements: true,
});

expect.extend(matchers);

beforeAll(() => {
  window.getComputedStyle = (elt) => getComputedStyle(elt);
  mswServer.listen();
  Object.defineProperty(window, 'matchMedia', {
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: false,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
    writable: true,
  });
});

afterAll(() => mswServer.close());

afterEach(() => {
  cleanup();
  store.dispatch(api.util.resetApiState());
  mswServer.resetHandlers();
});

export const mswServer = setupServer(...handlers);
