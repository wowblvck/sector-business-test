import { configureStore } from '@reduxjs/toolkit';
import { api } from '@api/api';
import postsReducer from '@/reducers/posts.reducer';

export const store = configureStore({
  reducer: {
    postsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
