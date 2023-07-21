import Posts from '@interfaces/Posts.interface';
import { Empty, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType<Posts> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 25,
  },
  {
    title: 'Заголовок',
    dataIndex: 'title',
    width: 200,
  },
  {
    title: 'Описание',
    dataIndex: 'body',
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
      locale={{
        emptyText: (
          <Empty description="Нет загруженных постов" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ),
      }}
    />
  );
};

export default PostsList;
