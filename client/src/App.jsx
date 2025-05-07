import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import HomePage from './pages/HomePage'
import Nopage from './pages/Nopage'


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "*",
        element: <Nopage />
      }
    ]
  }

])



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;