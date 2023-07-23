import { useGetPostsListQuery } from '@api/endpoints/postsApi';
import PostsList from '@components/PostsList';
import SearchBar from '@components/SearchBar';
import { Col, Row, Space } from 'antd';
import usePagination from '@hooks/usePagination';
import Paginator from '@components/Paginator';

const PostsPage: React.FC = () => {
  const { data, isLoading } = useGetPostsListQuery();

  const { pageNumber, pageSize, firstIndex, lastIndex, changePage } = usePagination({});

  const paginatedData = data?.slice(firstIndex, lastIndex);

  return (
    <Space direction="vertical" style={{ width: '1077px' }} size="large">
      <Row>
        <Col md={12} sm={24} span={12} xs={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PostsList posts={paginatedData || []} loading={isLoading} />
        </Col>
      </Row>
      {!isLoading && !!paginatedData?.length && (
        <Row justify="center">
          <Col>
            <Paginator
              totalItems={data!.length}
              pageSize={pageSize}
              currentPage={pageNumber}
              onChangePage={changePage}
            />
          </Col>
        </Row>
      )}
    </Space>
  );
};

export default PostsPage;
