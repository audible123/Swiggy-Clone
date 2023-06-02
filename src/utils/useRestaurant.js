import React from 'react'
import { useEffect,useState } from 'react';
import { RES_MENU_API } from '../config';

function useRestaurant(restaurantId) {
    const[restaurantInfo,setRestaurantInfo]=useState(null);
    const[restaurantMenuItem,setRestaurantMenuItem]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);


    async function getRestaurantInfo(){
        const data = await fetch(RES_MENU_API + restaurantId + "&submitAction=ENTER");
        const json = await data.json();
        console.log({json})
        setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
        setRestaurantMenuItem(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log({restaurantInfo})
        console.log({restaurantMenuItem})
    }
    return [restaurantInfo , restaurantMenuItem];

}

export default useRestaurant
