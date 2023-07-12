import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import React from 'react';
import Issues from '../pages/Issues';
import App from '../App';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/issues',
        element: <Issues />,
      },
      {
        path: '/issues/:issueNumber',
        element: <Detail />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const PrivateRouterProvider = () => {
  return <RouterProvider router={browserRouter} />;
};

export default PrivateRouterProvider;
