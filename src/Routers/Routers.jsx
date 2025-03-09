import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MiddleSingleNews from "../Components/LayoutComponents/MiddleSingleNews";

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
          element:<MiddleSingleNews></MiddleSingleNews>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          
        }
      ]
     
    },
  ]);