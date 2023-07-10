import React, { lazy ,Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import FoodFooter from './components/Footer';
import FoodBody from './components/Body';
import FoodHeader from './components/Header';
import { createBrowserRouter , RouterProvider,Outlet } from 'react-router-dom';
 import About from './components/about';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/shimmer';
import UserContext from './utils/UserContext';
import {Cart} from './components/Cart';
import Faq from './components/Faq';
import store from './utils/Store';
import { Provider } from 'react-redux';
import MapAndPayment from './components/MapAndPayment';
import { Credit, NetBanking, UPI, Wallet } from './components/PaymentOptions';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';

// import Instamart from './components/Instamart'; this is normal import

//Config Driven UI

// on demand import 
const Instamart = lazy(()=>import("./components/Instamart"));


const FoodAppLayout =()=>{


  const [user,setUser]=useState({
    name:"Aditya",
    email:"as328835@gmail.com",
  });
  return (
    <Provider store={store}>
    <UserContext.Provider
    value={{
      user:user,
      setUser:setUser,
    }}>
    <FoodHeader/>
    <Outlet/>
    <FoodFooter/>
    </UserContext.Provider>
    </Provider>
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
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/faq",
        element:<Faq/>,
      },
      {
        path:"/signup",
        element:<SignUp/>,
      },
      {
        path:"/login",
        element:<LoginForm/>,
      },
      {
        path:"/restaurant/:restaurantId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
      },
      {
        path:"/mapandpayment",
        element:<MapAndPayment/>,
        children:[
          {
            path:"/mapandpayment",
            element:<Wallet/>,
          },
          {
            path:"UPI",
            element:<UPI/>,
          },
          {
            path:"NetBanking",
            element:<NetBanking/>,
          },
          {
            path:"Credit",
            element:<Credit/>,
          },
        ],
      },
    ],
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// passed as a attribute 
root.render(<RouterProvider  router={appRouter}/>);










  



