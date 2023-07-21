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
  defaultPageNumber?: number;
  defaultLimit?: number;
};

type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn;

const usePagination: UsePagination = ({
  defaultLimit = DEFAULT_LIMIT_PER_PAGE,
  defaultPageNumber = DEFAULT_PAGE_NUMBER,
}) => {
  const [searchParams, setSearchParam] = useSearchParams({
    page: defaultPageNumber.toString(),
    limit: defaultLimit.toString(),
  });

  const [pageNumber, setPageNumber] = useState<number>(Number(searchParams.get('page')));
  const [pageSize] = useState<number>(Number(searchParams.get('limit')));

  const lastIndex = pageNumber * pageSize;
  const firstIndex = lastIndex - pageSize;

  useEffect(() => {
    setSearchParam({
      page: pageNumber.toString(),
      limit: pageSize.toString(),
    });
  }, [pageNumber, pageSize]);

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
