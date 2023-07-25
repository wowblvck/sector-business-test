import Posts from '@interfaces/Posts.interface';
import { api } from '@api/api';

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  posts: T[];
}

interface ListRequest {
  page: number;
  limit: number;
}

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<ListResponse<Posts>, ListRequest>({
      query: ({ page, limit }) => `/posts?&_page=${page}&_limit=${limit}`,
      transformResponse(response: Posts[], meta, arg) {
        const { limit, page } = arg;
        const totalCountHeader = Number(meta?.response?.headers.get('X-Total-Count'));
        const totalCount = totalCountHeader ? totalCountHeader : 0;

        const totalPages = Math.ceil(totalCount / limit) || 1;

        return {
          page: page,
          per_page: limit,
          total: totalCount,
          total_pages: totalPages,
          posts: response,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = postsApi;
