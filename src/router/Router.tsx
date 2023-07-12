import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Issues from '../pages/Issues';
import App from '../App';
import Main from '../pages/Main';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/issues',
        element: <Issues />,
      }
    ]
  },
]);

const PrivateRouterProvider = () => {
  return <RouterProvider router={browserRouter} />;
};

export default PrivateRouterProvider;
