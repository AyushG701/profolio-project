import React from "react";
import createBrowserRouter from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/projectDetails/:id",
    element: <ProjectDetails />,
    loader: ({ params }) => params.id,
  },
]);

export default router;
