import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import { About } from "./components/About/About.jsx";
import { Trams } from "./components/Trams/Trams.jsx";
import "./index.css";
import { Users } from "./components/users/users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/trams",
    Component: Trams,
  },
  {
    path: "/user",
    Component: Users,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
