import type { PreloadedState } from '@reduxjs/toolkit';
import type { AppStore, RootState } from '@store/store';
import type { RenderOptions } from '@testing-library/react';

import { api } from '@api/api';
import postsReducer from '@reducers/posts.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
      preloadedState,
      reducer: { [api.reducerPath]: api.reducer, postsReducer: postsReducer },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
