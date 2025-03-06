import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      children:[
        {
          path:'/',
          element:<Navigate to={'/singleCategory/01'}></Navigate>
        }
,        {
          path:'/singleCategory/:id',
          element:<h2 className="text-red-500">This is single category</h2>
        }
      ]
     
    },
  ]);