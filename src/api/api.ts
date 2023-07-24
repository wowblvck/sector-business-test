import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = import.meta.env.VITE_API;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: () => ({}),
});
