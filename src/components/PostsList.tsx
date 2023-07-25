import type { ColumnsType } from 'antd/es/table';

import Posts from '@interfaces/Posts.interface';
import { Empty, Table } from 'antd';

const columns: ColumnsType<Posts> = [
  {
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    title: 'ID',
    width: 25,
  },
  {
    dataIndex: 'title',
    sorter: (a, b) => a.title.length - b.title.length,
    title: 'Заголовок',
    width: 200,
  },
  {
    dataIndex: 'body',
    sorter: (a, b) => a.body.length - b.body.length,
    title: 'Описание',
  },
];

type PostsListsProps = {
  loading: boolean;
  posts: Posts[];
};

const PostsList: React.FC<PostsListsProps> = ({ loading, posts }) => {
  return (
    <Table
      locale={{
        cancelSort: 'Отменить сортировку',
        emptyText: (
          <Empty description="Нет загруженных постов" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ),
        triggerAsc: 'Сортировка по возрастанию',
        triggerDesc: 'Сортировка по убыванию',
      }}
      bordered
      columns={columns}
      dataSource={posts}
      loading={loading}
      pagination={false}
      rowKey={(record: Posts) => record.id}
      style={{ width: '100%' }}
    />
  );
};

export default PostsList;
