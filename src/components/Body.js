import RestrauntCard from "./RestaurantCard";
import { useState ,useEffect,useContext} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {fiterData} from "../utils/helper"


const FoodBody=()=>{
  const [searchText,setSearchText]=useState();
  const [allRestaurant,setAllRestaurant]=useState();
  const [filteredRestaurant,setFilteredRestaurant]=useState();

  const {user}=useContext(UserContext);

  
  useEffect(()=>{
    //API call
    getRestaurant();
  },[])
  
  async function getRestaurant(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9202266&lng=81.1795848&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h2>Check your connections and retry</h2>;   
  }

 
  
  if(!allRestaurant) return (
    <div className="null-restaurant flex flex-col justify-center items-center h-[70vh]" >
      <img className="h-52 w-60" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck" alt="Error" />
      <h1>Oh ! All the restaurants are currently unserviceable</h1>
      <h3>All restaurant are unserviceable,check back in some time.</h3>
    </div>
  );
  
  if(filteredRestaurant.length === 0) return (
    <div className="null-restaurant" style={{height:"40vh"}}>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/007/415/858/small/holding-signboard-404-not-found-cute-pear-cartoon-vector.jpg" alt="Error" />
      <h1>No Match Found</h1>
    </div>
  ); 
  
  //  .length lagana tha  
  return allRestaurant.length ===0 ?(<Shimmer/>):(
    <>
    <div className=" flex text-center p-5 my-5 justify-center items-center">
      <input className="w-[430px] shadow-xl p-1" type="text" placeholder="Search" value={searchText} onChange={
        (e)=>{
          setSearchText(e.target.value);
        }} />
        <button className="bg-gradient-to-r from-blue-900 to-black text-white p-[5px] box-border rounded-r-[25px]"
        onClick={()=>{
          const data= fiterData(searchText,allRestaurant);
          setFilteredRestaurant(data);
        }}
        >Go</button>
      </div>

        <h1 className="font-bold text-2xl ml-8 max-sm:text-4xl max-sm:ml-8">Available Restaurants</h1>
        <hr className="border-b-2" />
      
    <div className="flex my-14 mx-4 flex-wrap">{
    filteredRestaurant.map((restaurant) => {
    return (<Link 
      style={{textDecoration: 'none',color:"black",margin:"10px"}}
    to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}><RestrauntCard {...restaurant.data}/></Link>);
  })
    
}
</div>
    </>
  )
}


export default FoodBody
  