import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Page/Home/Home";
import Scholarships from "../Page/Scholarships/Scholarships";
import Universities from "../Page/Universities/Universities";
import About from "../Page/About/About";
import Error from "../Page/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "scholarships", Component: Scholarships },
      { path: "universities", Component: Universities },
      { path: "about", Component: About },
    ],
  },

  // authentication route
  {
    path: "auth",
  },
]);
