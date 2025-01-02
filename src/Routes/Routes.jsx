import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePageCompos/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
          path:"/order/:category",
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Registration></Registration>
        }
      ]
    },
  ]);