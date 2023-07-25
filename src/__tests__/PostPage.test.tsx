import { API } from '@api/api';
import PostsPage from '@pages/PostsPage';
import { act, fireEvent, waitFor } from '@testing-library/react';
import { mswServer } from '@tests/setup';
import { renderWithProviders } from '@utils/test-utils';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

describe('PostsPage', () => {
  test('renders the search bar and posts list when total pages < 1', async () => {
    const { getByText, queryByTestId } = renderWithProviders(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>
    );

    const loadingText = getByText('Нет загруженных постов');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const paginator = queryByTestId('paginator');
      expect(paginator).toBeInTheDocument();
    });
  });

  test('displays error notification on API failure', async () => {
    mswServer.use(
      rest.get(`${API}/posts`, (_req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>
    );

    await waitFor(
      () =>
        expect(getByText('Ошибка загрузки постов. Повторите попытку позднее!')).toBeInTheDocument(),
      { timeout: 10000 }
    );
  });

  test('filters posts based on the search value', async () => {
    const initialPosts = [
      { body: 'This is the body of test post 1.', id: 1, title: 'Test Post 1', userId: 2 },
      { body: 'This is the body of test post 2.', id: 2, title: 'Test Post 2', userId: 2 },
    ];

    mswServer.use(
      rest.get(`${API}/posts`, (_req, res, ctx) => {
        return res(ctx.json(initialPosts), ctx.status(200));
      })
    );

    const { getByPlaceholderText, getByRole, getByTestId, getByText, queryByText } =
      renderWithProviders(
        <MemoryRouter>
          <PostsPage />
        </MemoryRouter>
      );

    await waitFor(() => expect(getByTestId('post-page-content')).toBeInTheDocument(), {
      timeout: 10000,
    });

    const button = getByRole('button');
    const searchInput = getByPlaceholderText('Поиск');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'test post 1' } });
      fireEvent.click(button);
    });

    await waitFor(
      () => {
        expect(getByText('Test Post 1')).toBeInTheDocument();
        expect(queryByText('Test Post 2')).not.toBeInTheDocument();
      },
      { timeout: 10000 }
    );
  });
});
