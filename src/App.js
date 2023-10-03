import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import Body from './components/Body'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs  from './components/ContactUs';
import Error from './components/Error';
import ReastaurantMenu from './components/RestaurantMenu';

const AppLayout =()=>{
return(
    <div className="app">
<Header/>
<Outlet/>
    </div>
)
}

//config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resid",
        element: <ReastaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 // binded with project
 root.render(<RouterProvider router={appRouter}/>);

