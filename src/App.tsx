import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from '@layouts/RootLayout';
import PostsPage from '@pages/PostsPage';

const router = createBrowserRouter([
  {
    path: '/',
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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
