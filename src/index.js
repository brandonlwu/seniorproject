import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Main from "./Main";
import Profile from "./routes/profile"
import Root from "./routes/root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);