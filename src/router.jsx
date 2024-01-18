import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import NewBlog from "./Components/NewBlog";
import Blogs from "./Components/Blogs";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "Blogs", element: <Blogs /> },
  { path: "NewBlog", element: <NewBlog /> },
]);
