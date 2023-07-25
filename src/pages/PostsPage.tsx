import { useGetPostsListQuery } from '@api/endpoints/postsApi';
import Paginator from '@components/Paginator';
import PostsList from '@components/PostsList';
import SearchBar from '@components/SearchBar';
import { DEFAULT_LIMIT_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@constants/pagination';
import usePagination from '@hooks/usePagination';
import { useAppSelector } from '@store/hooks';
import { Col, Row, Space, notification } from 'antd';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PostsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit: DEFAULT_LIMIT_PER_PAGE,
    page: DEFAULT_PAGE_NUMBER,
  });

  const { changePage, pageNumber, pageSize } = usePagination({
    defaultPageNumber: Number(searchParams.get('page')),
    defaultPageSize: Number(searchParams.get('limit')),
  });

  const searchValue = useAppSelector((state) => state.postsReducer.searchValue);

  const { data, isError, isLoading } = useGetPostsListQuery({ limit: pageSize, page: pageNumber });

  const filteredPosts =
    !isLoading && data
      ? data?.posts.filter(
          (post) =>
            post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  useEffect(() => {
    if (isError)
      notification.error({
        duration: 3,
        message: 'Ошибка загрузки постов. Повторите попытку позднее!',
        placement: 'bottomRight',
      });
  }, [isError]);

  useEffect(() => {
    setSearchParams({
      limit: pageSize.toString(),
      page: pageNumber.toString(),
    });
  }, [pageNumber, pageSize]);

  return (
    <Space
      data-testid="post-page-content"
      direction="vertical"
      size="large"
      style={{ width: '1077px' }}
    >
      <Row>
        <Col md={12} sm={24} span={12} xs={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PostsList loading={isLoading} posts={filteredPosts} />
        </Col>
      </Row>
      {!isLoading && data && !!data.posts.length && (
        <Row data-testid="paginator" justify="center">
          <Col>
            <Paginator
              currentPage={data.page}
              onChangePage={changePage}
              pageSize={data.per_page}
              totalItems={data.total}
            />
          </Col>
        </Row>
      )}
    </Space>
  );
};

export default PostsPage;
