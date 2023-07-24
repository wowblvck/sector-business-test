import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import SearchBar from '@components/SearchBar';
import { setSearchValue } from '@/reducers/posts.reducer';
import { renderWithProviders } from '@/utils/test-utils';
import { setupStore } from '@/store/store';

describe('Search Bar render', () => {
  test('updates the search value when the form is submitted', () => {
    const store = setupStore();
    const searchValue = 'non';

    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText('Поиск');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: searchValue } });
    fireEvent.submit(button);

    store.dispatch(setSearchValue(searchValue));

    expect(store.getState().postsReducer.searchValue).toEqual(searchValue);
  });
});
