import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import PostsPage from '@pages/PostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        element: <Navigate to="/posts" replace />,
        index: true,
      },
      {
        Component: PostsPage,
        path: '/posts',
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
