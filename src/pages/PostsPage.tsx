import { Col, Row, Space, notification } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { useGetPostsListQuery } from '@api/endpoints/postsApi';
import PostsList from '@components/PostsList';
import SearchBar from '@components/SearchBar';
import Paginator from '@components/Paginator';
import usePagination from '@hooks/usePagination';
import { useAppSelector } from '@store/hooks';
import { useEffect } from 'react';
import { DEFAULT_LIMIT_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@constants/pagination';

const PostsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: DEFAULT_PAGE_NUMBER,
    limit: DEFAULT_LIMIT_PER_PAGE,
  });

  const { pageNumber, pageSize, changePage } = usePagination({
    defaultPageNumber: Number(searchParams.get('page')),
    defaultPageSize: Number(searchParams.get('limit')),
  });

  const searchValue = useAppSelector((state) => state.postsReducer.searchValue);

  const { isLoading, isError, data } = useGetPostsListQuery({ page: pageNumber, limit: pageSize });

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
        message: 'Ошибка загрузки постов. Повторите попытку позднее!',
        placement: 'bottomRight',
        duration: 3,
      });
  }, [isError]);

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
          <PostsList posts={filteredPosts} loading={isLoading} />
        </Col>
      </Row>
      {!isLoading && data && !!data.posts.length && (
        <Row justify="center" data-testid="paginator">
          <Col>
            <Paginator
              totalItems={data.total}
              currentPage={data.page}
              pageSize={data.per_page}
              onChangePage={changePage}
            />
          </Col>
        </Row>
      )}
    </Space>
  );
};

export default PostsPage;
