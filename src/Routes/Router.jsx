import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/shared/CheckOut";
import Bookings from "../pages/Home/Services/Bookings";
import PrivateRoutes from "../private/PrivateRoutes";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
        ,
        {
          path:'/login',
          element:<Login/>
        }
        ,{
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoutes><CheckOut/></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivateRoutes><Bookings/></PrivateRoutes>
        }
      ]
    },
  ]);

  export default router