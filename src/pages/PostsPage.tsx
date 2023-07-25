import { Col, Row, Space, notification } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGetPostsListQuery } from '@api/endpoints/postsApi';
import PostsList from '@components/PostsList';
import SearchBar from '@components/SearchBar';
import Paginator from '@components/Paginator';
import usePagination from '@hooks/usePagination';
import { useAppSelector } from '@store/hooks';
import Posts from '@interfaces/Posts.interface';
import { useEffect } from 'react';
import { DEFAULT_LIMIT_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@constants/pagination';

const PostsPage: React.FC = () => {
  const searchValue = useAppSelector((state) => state.postsReducer.searchValue);

  const { data: posts, isLoading, isError } = useGetPostsListQuery(searchValue);

  useEffect(() => {
    if (isError)
      notification.error({
        message: 'Fail to load posts data. Try again!',
        placement: 'bottomRight',
        duration: 3,
      });
  }, [isError]);

  const [searchParams, setSearchParams] = useSearchParams({
    page: DEFAULT_PAGE_NUMBER,
    limit: DEFAULT_LIMIT_PER_PAGE,
  });

  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));

  const { pageNumber, pageSize, changePage, slicedData } = usePagination<Posts>({
    data: posts || [],
    pageParams: page,
    pageSizeParams: limit,
  });

  useEffect(() => {
    setSearchParams({
      page: pageNumber.toString(),
      limit: pageSize.toString(),
    });
  }, [pageNumber, pageSize]);

  return (
    <Space
      direction="vertical"
      style={{ width: '1077px' }}
      size="large"
      data-testid="post-page-content"
    >
      <Row>
        <Col md={12} sm={24} span={12} xs={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PostsList posts={slicedData || []} loading={isLoading} />
        </Col>
      </Row>
      {!isLoading && !!slicedData?.length && (
        <Row justify="center" data-testid="paginator">
          <Col>
            <Paginator
              totalItems={posts!.length}
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
