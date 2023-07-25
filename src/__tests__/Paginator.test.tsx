import Paginator from '@components/Paginator';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

const mockOnChangePage = vi.fn();

const totalItems = 50;
const pageSize = 10;
const currentPage = 3;

test('Paginator renders correctly', () => {
  const { getByText } = render(
    <Paginator
      currentPage={currentPage}
      onChangePage={mockOnChangePage}
      pageSize={pageSize}
      totalItems={totalItems}
    />
  );

  const prevLink = getByText('Назад');
  expect(prevLink).toBeInTheDocument();

  const nextLink = getByText('Вперед');
  expect(nextLink).toBeInTheDocument();
});

test('Clicking on "Назад" link calls onChangePage with the correct page number', () => {
  const { getByText } = render(
    <Paginator
      currentPage={currentPage}
      onChangePage={mockOnChangePage}
      pageSize={pageSize}
      totalItems={totalItems}
    />
  );

  const prevLink = getByText('Назад');
  fireEvent.click(prevLink);

  expect(mockOnChangePage).toHaveBeenCalledWith(currentPage - 1);
});

test('Clicking on "Вперед" link calls onChangePage with the correct page number', () => {
  const { getByText } = render(
    <Paginator
      currentPage={currentPage}
      onChangePage={mockOnChangePage}
      pageSize={pageSize}
      totalItems={totalItems}
    />
  );

  const nextLink = getByText('Вперед');
  fireEvent.click(nextLink);

  expect(mockOnChangePage).toHaveBeenCalledWith(currentPage + 1);
});
