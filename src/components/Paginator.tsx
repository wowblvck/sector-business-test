import type { PaginationProps } from 'antd';

import { Pagination } from 'antd';

type PaginatorProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  pageSize: number;
  totalItems: number;
};

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Назад</a>;
  }
  if (type === 'next') {
    return <a>Вперед</a>;
  }
  return originalElement;
};

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  onChangePage,
  pageSize,
  totalItems,
}) => {
  const onChange: PaginationProps['onChange'] = (page) => {
    onChangePage(page);
  };

  return (
    <Pagination
      current={currentPage}
      itemRender={itemRender}
      onChange={onChange}
      pageSize={pageSize}
      showSizeChanger={false}
      style={{ textAlign: 'center' }}
      total={totalItems}
    />
  );
};

export default Paginator;
