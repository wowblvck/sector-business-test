import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '@api/api';
import postsReducer from '@reducers/posts.reducer';

const rootReducer = combineReducers({
  postsReducer: postsReducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
