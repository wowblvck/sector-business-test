import { useGetPostsListQuery } from '@api/endpoints/postsApi';
import PostsList from '@components/PostsList';
import SearchBar from '@components/SearchBar';
import { Col, Row, Space } from 'antd';
import usePagination from '@hooks/usePagination';
import Paginator from '@components/Paginator';
import { useAppSelector } from '@/store/hooks';

const PostsPage: React.FC = () => {
  const searchValue = useAppSelector((state) => state.postsReducer.searchValue);

  const { data, isLoading } = useGetPostsListQuery(searchValue);

  const { pageNumber, pageSize, firstIndex, lastIndex, changePage } = usePagination({
    dataLength: data?.length || 0,
  });

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
