import usePagination from '@hooks/usePagination';
import { act, renderHook } from '@testing-library/react';

describe('usePagination', () => {
  test('should return initial pagination state', () => {
    const { result } = renderHook(() =>
      usePagination({
        defaultPageNumber: 1,
        defaultPageSize: 3,
      })
    );

    expect(result.current.pageNumber).toBe(1);
    expect(result.current.pageSize).toBe(3);
  });

  test('should change the pageNumber correctly when calling changePage function', () => {
    const { result } = renderHook(() =>
      usePagination({
        defaultPageNumber: 1,
        defaultPageSize: 2,
      })
    );

    expect(result.current.pageNumber).toBe(1);

    act(() => {
      result.current.changePage(2);
    });

    expect(result.current.pageNumber).toBe(2);
  });
});
