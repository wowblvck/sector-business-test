import { api } from '@api/api';
import postsReducer from '@reducers/posts.reducer';
import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  postsReducer: postsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    preloadedState,
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
