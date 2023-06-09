import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { birdService } from "./services/bird-service";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./contexts/AuthContext";
import SnackBarProvider from "./contexts/SnackBarContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: birdService.getAllBirds,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SnackBarProvider>
        <RouterProvider router={router} />
      </SnackBarProvider>
    </AuthProvider>
  </React.StrictMode>
);
