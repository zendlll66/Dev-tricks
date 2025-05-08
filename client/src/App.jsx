import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import HomePage from './pages/HomePage'
import Nopage from './pages/Nopage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import BlogDetail from './pages/BlogDetail'


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
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element:
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail/>
      }
    ]
  }

])



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;