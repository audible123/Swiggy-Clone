import React from 'react'
import { useEffect,useState } from 'react';

function useRestaurant(restaurantId) {
    const[restaurantInfo,setRestaurantInfo]=useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);


    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9202266&lng=81.1795848&restaurantId=" + restaurantId + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);

    }
    return restaurantInfo;

}

export default useRestaurant