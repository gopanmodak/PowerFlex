
import { createBrowserRouter } from "react-router-dom";
import Facilities from "./Components/Facilities/Facilities";
import AboutUs from "./Components/AboutUs/AboutUs";
import Trainers from "./Components/Trainers/Trainers";
import Packages from "./Components/Packages/Packages";
import Home from "./Components/Home/home";
import App from "./App";


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',element:<Home/>},
      {
        path:'/facilities',
        element:<Facilities/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'/trainers',
        element:<Trainers/>
      },
      {
        path:'/packages',
        element:<Packages/>
      },
    ]
  }


])

export default router;