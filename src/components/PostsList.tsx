import Posts from '@interfaces/Posts.interface';
import { Empty, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<Posts> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 25,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Заголовок',
    dataIndex: 'title',
    width: 200,
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: 'Описание',
    dataIndex: 'body',
    sorter: (a, b) => a.body.length - b.body.length,
  },
];

type PostsListsProps = {
  posts: Posts[];
  loading: boolean;
};

const PostsList: React.FC<PostsListsProps> = ({ posts, loading }) => {
  return (
    <Table
      loading={loading}
      dataSource={posts}
      columns={columns}
      bordered
      rowKey={(record: Posts) => record.id}
      pagination={false}
      style={{ width: '100%' }}
      locale={{
        emptyText: (
          <Empty description="Нет загруженных постов" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ),
        triggerAsc: 'Сортировка по возрастанию',
        triggerDesc: 'Сортировка по убыванию',
        cancelSort: 'Отменить сортировку',
      }}
    />
  );
};

export default PostsList;
