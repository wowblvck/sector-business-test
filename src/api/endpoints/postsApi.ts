import { api } from '@api/api';
import Posts from '@interfaces/Posts.interface';

interface ListResponse<T> {
  page: number;
  per_page: number;
  posts: T[];
  total: number;
  total_pages: number;
}

interface ListRequest {
  limit: number;
  page: number;
}

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<ListResponse<Posts>, ListRequest>({
      query: ({ limit, page }) => `/posts?&_page=${page}&_limit=${limit}`,
      transformResponse(response: Posts[], meta, arg) {
        const { limit, page } = arg;
        const totalCountHeader = Number(meta?.response?.headers.get('X-Total-Count'));
        const totalCount = totalCountHeader ? totalCountHeader : 0;

        const totalPages = Math.ceil(totalCount / limit) || 1;

        return {
          page: page,
          per_page: limit,
          posts: response,
          total: totalCount,
          total_pages: totalPages,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = postsApi;
