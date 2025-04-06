import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Experience } from "./components/Experience";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
])