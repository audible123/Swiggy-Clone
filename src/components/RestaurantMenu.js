import {useParams} from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import {MenuCard} from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu =()=>{
    const {restaurantId} = useParams();
    const restaurantInfoArray = useRestaurant(restaurantId);

   const  restaurantInfo = restaurantInfoArray[0];
   const  restaurantMenuInfo = restaurantInfoArray[1];

   console.log({restaurantInfo})

   console.log({restaurantMenuInfo})


   
   
    return (!restaurantInfo) ? (
        <Shimmer/> 
    ) : (
        <div className="flex flex-row justify-between max-md:flex-col">
            <div className="flex flex-col max-w-[500px] w-[100%] border-2 py-10 bg-[rgb(237,241,247)]  items-start max-md:max-w-full max-sm:max-w-full">
            <h1 className="font-bold mx-7 max-sm:text-center max-sm:mx-auto">Restaurant :{restaurantId}</h1>
            <h1 className=" font-bold text-4xl mx-7 max-sm:mx-16 max-sm:text-5xl">{restaurantInfo?.name}</h1>  
            <div  className="flex flex-col m-5 max-md:flex-row">
            <img className="h-[268px] w-[268px] m-2 max-sm:h-[300px] max-sm:w-[350px] max-sm:mx-16" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurantInfo.cloudinaryImageId} />   
            </div>
            <div className="text-sm m-7 font-medium max-sm:text-4xl max-sm:ml-12">
            <h3>
                <span className="font-bold">Area Name : </span>
                {restaurantInfo?.areaName}</h3>
            <h3>
                <span className="font-bold">City : </span>
            {"City: "+restaurantInfo?.city}</h3>
            <h3>
                <span className="font-bold">avgRating : </span>
                {restaurantInfo?.avgRating + " stars"}</h3>
            <h3>
                <span className="font-bold">CostForTwo : </span>
                 {restaurantInfo?.costForTwo}</h3>
            <h3> 
                <span className="font-bold">Veg/Non-Veg : </span>
                {restaurantInfo?.veg ? restaurantInfo?.veg : "Not  Specified" }</h3>
            <h3>
                <span className="font-bold"></span>
                {restaurantInfo?.costForTwoMessage}</h3>
            </div>
            </div>
            <div></div>
            <hr/>
            <div className="flex flex-col">
            <div className="items-start font-bold text-4xl h-16" ><h1 className="text-center p-3">Menu</h1></div>
            <div >
            <div className="flex flex-wrap w-[1020px] justify-evenly max-sm:w-[500px] max-sm:my-10">
            
            {restaurantMenuInfo && restaurantMenuInfo.map((Menu)=>{
                    return(
                        
                        <div key={Menu?.card?.info?.id}>
                        <MenuCard {...Menu?.card?.info} />
                        </div>
                    )})}
            </div>
            </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;

