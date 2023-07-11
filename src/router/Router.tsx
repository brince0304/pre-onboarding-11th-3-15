import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import React from 'react';
import Issues from '../pages/Issues';

const browserRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main/>,
    },
    {
      path: '/issues',
      element: <Issues/>,
    }
  ]
)

const PrivateRouterProvider = () => {
  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default PrivateRouterProvider;