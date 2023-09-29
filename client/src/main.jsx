import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./Router/index";
import {RouterProvider} from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
   


//573983185123-4rhk11a6qkqo4gn10dvf7d1eudql7b5i.apps.googleusercontent.com