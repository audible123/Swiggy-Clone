import React from 'react';
import ReactDOM from 'react-dom';
import FoodFooter from './components/Footer';
import FoodBody from './components/Body';
import FoodHeader from './components/Header';
import { createBrowserRouter , RouterProvider,Outlet } from 'react-router-dom';
 import About from './components/about';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


//Config Driven UI


const FoodAppLayout =()=>{
  return (
    <>
    <FoodHeader/>
    <Outlet/>
    <FoodFooter/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<FoodAppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/",
        element:<FoodBody/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:restaurantId",
        element:<RestaurantMenu/>,
      },
    ],
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// passed as a attribute 
root.render(<RouterProvider  router={appRouter}/>);










  



