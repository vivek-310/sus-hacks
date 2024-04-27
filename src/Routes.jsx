import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ShihamiLandingPage from "pages/ShihamiLandingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <ShihamiLandingPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
