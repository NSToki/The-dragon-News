import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import About from "../Pages/About";
import NewsDetails from "../Pages/NewsDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        loader:() => fetch("/news.json")
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
      {
        path:"/news/:id",
        Component:NewsDetails,
        loader:()=>fetch("/news.json")
      }
    ],
    
  },
  {
    path:"/login",
    Component:Login
  },
  {
    path:"/register",
    Component:Register
  }
]);

export default router;
