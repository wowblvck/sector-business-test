import { renderHook, act } from '@testing-library/react';
import usePagination from '@hooks/usePagination';

const dummyData = Array.from({ length: 10 }, (_, i) => i + 1);

describe('usePagination', () => {
  test('should return initial pagination state', () => {
    const { result } = renderHook(() =>
      usePagination({
        data: dummyData,
        pageParams: 1,
        pageSizeParams: 3,
      })
    );

    expect(result.current.pageNumber).toBe(1);
    expect(result.current.pageSize).toBe(3);
    expect(result.current.slicedData).toEqual([1, 2, 3]);
  });

  test('should reset the pageNumber to DEFAULT_PAGE_NUMBER if it exceeds totalPages', () => {
    const { result } = renderHook(() =>
      usePagination({
        data: dummyData,
        pageParams: 4,
        pageSizeParams: 4,
      })
    );

    expect(result.current.pageNumber).toBe(1);
  });

  test('should change the pageNumber correctly when calling changePage function', () => {
    const { result } = renderHook(() =>
      usePagination({
        data: dummyData,
        pageParams: 1,
        pageSizeParams: 2,
      })
    );

    expect(result.current.pageNumber).toBe(1);

    act(() => {
      result.current.changePage(2);
    });

    expect(result.current.pageNumber).toBe(2);
    expect(result.current.slicedData).toEqual([3, 4]);
  });
});
