import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Blog } from "./components/Blog/Blog";
import { Post } from "./components/Blog/Post";


export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
  },
  {
    path: "/portfolio/blog",
    element: <Blog />,
  },
  {
    path: "/portfolio/blog/:slug",
    element: <Post />,
  },
])
