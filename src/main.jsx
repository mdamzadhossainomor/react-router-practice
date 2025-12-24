import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import { About } from "./components/About/About.jsx";
import { Trams } from "./components/Trams/Trams.jsx";
import "./index.css";
import { AllUsers} from "./components/Allusers/AllUsers.jsx";
import { ParamsData } from "./components/paramsData/ParamsData.jsx";
import { ControlForm } from "./components/controlFrom/ControlForm.jsx";

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
    path: "/users",
    Component: AllUsers,
  },
  {
    path: "/form",
    Component: ControlForm,
  },
  {
    path: "/users/:userId",
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    Component: ParamsData,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
