import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { itemCards } from "../config"
import RestrauntCard from "./RestaurantCard";
import MenuCard from "./MenuCard";

const RestaurantMenu =()=>{
    const {restaurantId} = useParams();
    const restaurantInfoArray = useRestaurant(restaurantId);

   const  restaurantInfo = restaurantInfoArray[0]
   const  restaurantMenuInfo = restaurantInfoArray[1]

   console.log({restaurantInfo})

   console.log({restaurantMenuInfo})



   
    return (!restaurantInfo) ? (
        <Shimmer/> 
    ) : (
        <div className="menu">
            <div>
            <h1 className="font-bold mx-7 max-sm:text-center">Restaurant :{restaurantId}</h1>
            <h1 className="font-bold text-4xl mx-7">{restaurantInfo?.name}</h1>
            <div className="flex flex-col ">
            <img className="h-60 w-60 m-7" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurantInfo.cloudinaryImageId} />
            <div className="text-lg m-7">
            <h3>{"AreaName: "+restaurantInfo?.areaName}</h3>
            <h3>{"City: "+restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating + " stars"}</h3>
            <h3>{"CostForTwo: "+restaurantInfo?.costForTwo}</h3>
            <h3>{"Veg: "+restaurantInfo?.veg}</h3>
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
            </div>
            </div>
            <div>
            <h1 className="text-center font-bold text-4xl">Menu</h1>
            <div>
                {restaurantMenuInfo && restaurantMenuInfo.map((Menu)=>(
                  
                    <div key={Menu?.card?.info?.id}>
                    <MenuCard {...Menu?.card?.info} />
                    </div>
                ))}
            </div>
            </div>
            
        </div>
        </div>   
    );
};

export default RestaurantMenu;

{/* <ul>
                {Object.values(restaurantInfo?.menu?.items).map((item) =>(
                  <li key={item.id}>{item.name}</li>  
                ))}
            </ul> */}