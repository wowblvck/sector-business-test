import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API = import.meta.env.VITE_API;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: () => ({}),
  reducerPath: 'api',
});
