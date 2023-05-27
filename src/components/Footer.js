import UserContext from "../utils/UserContext";
import { useContext } from "react";


const FoodFooter =()=>{

  const {user}=useContext(UserContext);
    return (
      <div className="flex flex-row h-[27vh] bg-gradient-to-r from-blue-900 to-black w-full">
        <div className="my-5 mx-3 text-white"><h1>Gukalo</h1>
        <br />
      <h2 className="text-white"> &#169; 2023 {user.name}. All rights reserved.</h2>
      <h2 className="text-white">Contact us at {user.email}</h2>
      </div>
      </div>
    );
  };


export default FoodFooter