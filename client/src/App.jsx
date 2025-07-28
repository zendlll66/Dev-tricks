import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import HomePage from "./pages/HomePage";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogDetail from "./pages/BlogDetail";
import PostPage from "./pages/dashboard/Postpage";
import EditDelete from "./pages/dashboard/EditDelete";
import EditById from "./pages/dashboard/EditById";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Activity from "./pages/Activity";
import PostPro from "./pages/dashboard/manageProject/PostPro";
import ActivityDetail from "./pages/ActivityDetail";
import EditPro from "./pages/dashboard/manageProject/EditPro";
import EditPostById from "./pages/dashboard/manageProject/EditPostById";
import ProjectOnWork from "./pages/ProjectOnWork";
import PostProWk from "./pages/dashboard/manageProject-wk/PostProWk";
import EditProWk from "./pages/dashboard/manageProject-wk/EditProWk";
import EditPostByIdWk from "./pages/dashboard/manageProject-wk/EditPostByIdWk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/blogs",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard/blog/post",
            element: <PostPage />,
          },
          {
            path: "/dashboard/blog/edit",
            element: <EditDelete />,
          },
          {
            path: "/dashboard/blog/edit/:id",
            element: <EditById />,
          },
          {
            path: "/dashboard/project/post",
            element: <PostPro />,
          },
          {
            path: "/dashboard/project/edit",
            element: <EditPro />,
          },
          {
            path: "/dashboard/project/edit/:id",
            element: <EditPostById />,
          },
          {
            path: "/dashboard/project-wk/post",
            element: <PostProWk />,
          },
          {
            path: "/dashboard/project-wk/edit",
            element: <EditProWk />,
          },
          {
            path: "/dashboard/project-wk/edit/:id",
            element: <EditPostByIdWk />,
          },

        ],
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <AboutPage />,
      },
      {
        path: "/about/personal-projects",
        element: <ProjectPage />,
      },
      {
        path: "/about/activity",
        element: <Activity />,
      },
      {
        path: "about/activity/details/:id",
        element: <ActivityDetail />,
      },
      {
        path: "/about/work-projects",
        element: <ProjectOnWork />,
      },
    ],
  },
  {
    path: "*",
    element: <Nopage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
