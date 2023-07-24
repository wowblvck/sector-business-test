import PostsPage from '@pages/PostsPage';
import { renderWithProviders } from '@/utils/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

describe('PostsPage', () => {
  test('renders the search bar and posts list', async () => {
    const { getByTestId, getByText } = renderWithProviders(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>
    );

    const loadingText = getByText('Нет загруженных постов');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const paginator = getByTestId('paginator');
      expect(paginator).toBeInTheDocument();
    });
  });

  test('renders the search bar and posts list', async () => {
    const { getByTestId, getByText } = renderWithProviders(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>
    );

    const loadingText = getByText('Нет загруженных постов');
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const paginator = getByTestId('paginator');
      expect(paginator).toBeInTheDocument();
    });
  });
});
