import UserContext from "../utils/UserContext";
import { useContext } from "react";


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
          <li>Swiggy Instamart</li>
          <li>Swiggy Blog</li>
          <li>About us</li>
          <li>Swiggy Genie</li>
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