import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Page/Home/Home";
import Scholarships from "../Page/Scholarships/Scholarships";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "scholarships", Component: Scholarships },
    ],
  },
]);
