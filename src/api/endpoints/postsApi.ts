import Posts from '@interfaces/Posts.interface';
import { api } from '@api/api';

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<Posts[], void>({
      query: () => 'posts',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = postsApi;
