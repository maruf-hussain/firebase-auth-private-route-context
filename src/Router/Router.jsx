import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Order from "../components/Order/Order";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import Roots from "../components/Root/Roots";
import About from "../components/About/About.jsx"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error>,
    children:[

  {
    path:"login",
    element:<Login></Login>
  },
  {
    path:"register",
    element:<Register></Register>
  },
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:"order",
    element:<PrivateRoute><Order></Order></PrivateRoute>
  },
  {
    path:"about",
    element:<About></About>
  }
  
    ]
  },
]);
export default router