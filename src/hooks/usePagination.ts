import { useState } from 'react';

type UsePaginationReturn = {
  changePage: (page: number) => void;
  pageNumber: number;
  pageSize: number;
};

type UsePaginationProps = {
  defaultPageNumber: number;
  defaultPageSize: number;
};

type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn;

const usePagination: UsePagination = ({ defaultPageNumber, defaultPageSize }) => {
  const [pageNumber, setPageNumber] = useState<number>(defaultPageNumber);
  const [pageSize] = useState<number>(defaultPageSize);

  const onChangePage = (page: number) => {
    setPageNumber(page);
  };

  return {
    changePage: onChangePage,
    pageNumber,
    pageSize,
  };
};

export default usePagination;
