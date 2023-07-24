import Posts from '@interfaces/Posts.interface';
import { api } from '@api/api';

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<Posts[], string>({
      query: (query: string) => `/posts${query.length ? `?q=${query}` : ''}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = postsApi;
