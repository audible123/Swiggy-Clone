import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const FoodFooter =()=>{

  const {user}=useContext(UserContext);
    return (
      <div className="grid grid-cols-3 grid-rows-2 h-auto bg-black w-full text-white">

      <div className="ml-8 flex flex-row col-span-3 h-52">
        <div className=" my-5 mx-3 text-white"><h1 className="font-bold">Swifty</h1>
        <br />
      <h2 className="text-white"> &#169; 2023 {user.name}. All rights reserved.</h2>
      <h2 className="text-white">Contact us at {user.email}</h2>
      </div>
      </div>

      <div className="ml-10">
        <h1 className="font-bold text-gray-400">COMPANY</h1>
        <ul >
          <Link 
          to="/instamart"
          ><li>Swiggy Instamart</li></Link>

          <Link
          to="https://blog.swiggy.com/"><li>Swiggy Blog</li></Link>

          <Link
          to="/about"
          ><li>About us</li></Link>
          
          <Link 
          to="https://www.swiggy.com/swiggy-genie"><li>Swiggy Genie</li></Link>
          
        </ul>
      </div>

      <div className="ml-10">
        <h1 className="font-bold text-gray-400">LEGAL</h1>
        <ul>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />

        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
      </div>

      </div>
    );
  };


export default FoodFooter