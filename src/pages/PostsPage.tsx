import PostsList from '@/components/PostsList';
import SearchBar from '@components/SearchBar';
import { Col, Row, Space } from 'antd';

function PostsPage() {
  return (
    <Space direction="vertical" size="large" style={{ width: '1077px' }}>
      <Row>
        <Col md={12} sm={24} span={12} xs={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PostsList />
        </Col>
      </Row>
    </Space>
  );
}

export default PostsPage;
