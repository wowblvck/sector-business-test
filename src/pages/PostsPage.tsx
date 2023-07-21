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
    <Space direction="vertical" size="large" style={{ width: '1077px' }}>
      <Row>
        <Col md={12} sm={24} span={12} xs={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <PostsList posts={paginatedData || []} loading={isLoading} />
            {!isLoading && !!paginatedData?.length && (
              <Paginator
                totalItems={data!.length}
                pageSize={pageSize}
                currentPage={pageNumber}
                onChangePage={changePage}
              />
            )}
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default PostsPage;
