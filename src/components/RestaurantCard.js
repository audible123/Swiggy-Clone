import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {

    // const {user}=useContext(UserContext);

    return (
      <div className="w-40 h-56 p-3 shadow-md hover:border-b-2 hover:shadow-2xl max-sm:w-[200px] max-sm:h-64">
        <img
          className="w-full"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <div className="w-full text-xs ">
        <h2 className="font-bold text-sm my-1 max-sm:text">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        {/* <h1 className="text-center text-base text-transparent hover:text-black bottom-0">----Quick View----</h1> */}
        </div>
      </div>
    );
  };

export default RestrauntCard