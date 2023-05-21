import React from "react";
import { useState,useEffect } from "react";

function useCard(){
    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9202266&lng=81.1795848&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      }
      useEffect(()=>{
        //API call
        getRestaurant();
      },[])
    
    return 
}