import { DEFAULT_PAGE_NUMBER } from '@/constants/pagination';
import { useEffect, useState } from 'react';

type UsePaginationReturn<T> = {
  slicedData: T[];
  pageNumber: number;
  pageSize: number;
  changePage: (page: number) => void;
};

type UsePaginationProps<T> = {
  data: T[];
  pageParams: number;
  pageSizeParams: number;
};

type UsePagination = <T>(arg: UsePaginationProps<T>) => UsePaginationReturn<T>;

const usePagination: UsePagination = ({ data, pageParams, pageSizeParams }) => {
  const [pageNumber, setPageNumber] = useState<number>(pageParams);
  const [pageSize] = useState<number>(pageSizeParams);
  const totalPages = Math.ceil(data.length / pageSize);

  const lastIndex = pageNumber * pageSize;
  const firstIndex = lastIndex - pageSize;

  const slicedData = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (totalPages !== 0 && pageNumber > totalPages) {
      setPageNumber(Number(DEFAULT_PAGE_NUMBER));
    }
  }, [totalPages]);

  const onChange = (page: number) => {
    setPageNumber(page);
  };

  return {
    slicedData,
    pageNumber,
    pageSize,
    changePage: onChange,
  };
};

export default usePagination;
