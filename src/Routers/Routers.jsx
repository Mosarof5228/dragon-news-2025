import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
    },
  ]);