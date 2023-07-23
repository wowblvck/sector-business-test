import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DEFAULT_PAGE_NUMBER, DEFAULT_LIMIT_PER_PAGE } from '@constants/pagination';

type UsePaginationReturn = {
  pageNumber: number;
  pageSize: number;
  firstIndex: number;
  lastIndex: number;
  changePage: (page: number) => void;
};

type UsePaginationProps = {
  dataLength: number;
  defaultPageNumber?: number;
  defaultLimit?: number;
};

type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn;

const usePagination: UsePagination = ({
  dataLength,
  defaultLimit = DEFAULT_LIMIT_PER_PAGE,
  defaultPageNumber = DEFAULT_PAGE_NUMBER,
}) => {
  const [searchParams, setSearchParam] = useSearchParams({
    page: defaultPageNumber.toString(),
    limit: defaultLimit.toString(),
  });

  const [pageNumber, setPageNumber] = useState<number>(Number(searchParams.get('page')));
  const [pageSize] = useState<number>(Number(searchParams.get('limit')));
  const totalPages = Math.ceil(dataLength / pageSize);

  const lastIndex = pageNumber * pageSize;
  const firstIndex = lastIndex - pageSize;

  useEffect(() => {
    if (dataLength !== 0 && pageNumber > totalPages) {
      setPageNumber(1);
    }
    setSearchParam({
      page: pageNumber.toString(),
      limit: pageSize.toString(),
    });
  }, [pageNumber, pageSize, totalPages]);

  const onChange = (page: number) => {
    setPageNumber(page);
  };

  return {
    pageNumber,
    pageSize,
    firstIndex,
    lastIndex,
    changePage: onChange,
  };
};

export default usePagination;
