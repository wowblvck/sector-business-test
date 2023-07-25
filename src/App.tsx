import RootLayout from '@layouts/RootLayout';
import PostsPage from '@pages/PostsPage';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        element: <Navigate replace to="/posts" />,
        index: true,
      },
      {
        Component: PostsPage,
        path: '/posts',
      },
    ],
    path: '/',
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
