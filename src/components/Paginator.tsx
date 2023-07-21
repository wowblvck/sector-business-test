import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

type PaginatorProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (page: number) => void;
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
  totalItems,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  const onChange: PaginationProps['onChange'] = (page) => {
    onChangePage(page);
  };

  return (
    <Pagination
      total={totalItems}
      itemRender={itemRender}
      showSizeChanger={false}
      pageSize={pageSize}
      current={currentPage}
      onChange={onChange}
    />
  );
};

export default Paginator;
