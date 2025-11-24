import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
      },
      {
        path: "/auth",
        element: <h1>Auth Layout</h1>,
      },
      {
        path: "/news",
        element: <h1>News Layout</h1>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/*",
        element: <h1>Error 404</h1>,
      },
    ],
  },
]);

export default router;
