import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../components/Feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <App /> },
      { path: "/posts/:category", element: <Feed /> },
    ],
  },
]);
