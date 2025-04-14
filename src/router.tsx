import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
])