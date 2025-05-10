import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import HomePage from './pages/HomePage'
import Nopage from './pages/Nopage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import BlogDetail from './pages/BlogDetail'
import PostPage from './pages/dashboard/Postpage'
import EditDelete from './pages/dashboard/EditDelete'
import EditById from './pages/dashboard/EditById'
import Contact from './pages/Contact'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import Activity from './pages/Activity'


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/blogs",
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
          </ProtectedRoute>,
        children: [
          {
            path: "/dashboard/post",
            element: <PostPage />
          },
          {
            path: "/dashboard/edit",
            element: <EditDelete />
          },
          {
            path: "/dashboard/edit/:id",
            element: <EditById />
          }
        ]
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/",
        element: <AboutPage />
      },
      {
        path: "/about/project",
        element: <ProjectPage />
      },
      {
        path: '/about/activity',
        element: <Activity />
      }
    ]
  }

])



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;