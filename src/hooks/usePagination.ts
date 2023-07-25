import { useState } from 'react';

type UsePaginationReturn = {
  pageNumber: number;
  pageSize: number;
  changePage: (page: number) => void;
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
    pageNumber,
    pageSize,
    changePage: onChangePage,
  };
};

export default usePagination;
