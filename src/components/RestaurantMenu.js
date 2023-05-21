import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu =()=>{
    const {restaurantId} = useParams();
    const restaurantInfo = useRestaurant(restaurantId);
   
    return !restaurantInfo ? (
        <Shimmer/> 
    ) : (
        <div className="menu">
            <div>
            <h1>Restaurant :{restaurantId}</h1>
            <h1>{restaurantInfo?.name}</h1>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurantInfo.cloudinaryImageId} />
            <h3>{"AreaName: "+restaurantInfo?.areaName}</h3>
            <h3>{"City: "+restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating + " stars"}</h3>
            <h3>{"CostForTwo: "+restaurantInfo?.costForTwo}</h3>
            <h3>{"Veg: "+restaurantInfo?.veg}</h3>
            <h3>{restaurantInfo?.costForTwoMessage}</h3>
            </div>
            <div>
            <h1>Menu</h1>
            <ul>
                {/* {Object.values(restaurantInfo?.menu?.items).map((item) =>(
                  <li key={item.id}>{item.name}</li>  
                ))} */}
            </ul>
        </div>
        </div>   
    );
};

export default RestaurantMenu;
