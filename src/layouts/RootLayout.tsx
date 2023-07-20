import { Grid, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

const { useBreakpoint } = Grid;

function RootLayout() {
  const { xs } = useBreakpoint();

  return (
    <Layout>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: `23px ${xs ? '20px' : '77px'}`,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}

export default RootLayout;
