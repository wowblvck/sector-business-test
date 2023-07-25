import { vi } from 'vitest';
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { configure } from '@testing-library/react';
import handlers from '@mocks/handlers';
import { setupStore } from '@store/store';

import { setupServer } from 'msw/node';
import { api } from '@api/api';

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
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterAll(() => mswServer.close());

afterEach(() => {
  cleanup();
  store.dispatch(api.util.resetApiState());
  mswServer.resetHandlers();
});

export const mswServer = setupServer(...handlers);
