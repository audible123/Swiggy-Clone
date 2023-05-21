import RestrauntCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


//filter lagana tha bsdk rate ho to lowercase mei ( ) hoga
function fiterData(searchText,allRestaurant){
  const result = allRestaurant.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return result;
}

// => nhi hoga is.me amd the conditional rendering will be inside the function

// dusri wali rendering nhi aa rahi

const FoodBody=()=>{
  const [searchText,setSearchText]=useState();
  const [allRestaurant,setAllRestaurant]=useState();
  const [filteredRestaurant,setFilteredRestaurant]=useState();
  
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9202266&lng=81.1795848&page_type=DESKTOP_WEB_LISTING


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
  
  if(!allRestaurant) return (
    <div className="null-restaurant" style={{height:"40vh"}}>
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck" alt="Error" />
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
    <div className="search-container">
      <input type="text" placeholder="Search" value={searchText} onChange={
        (e)=>{
          setSearchText(e.target.value);
        }} />
        <button className="all-btn"
        onClick={()=>{
          const data= fiterData(searchText,allRestaurant);
          setFilteredRestaurant(data);
        }}
        >Submit</button>
      </div>
      
    <div className="restaurant-list">{
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
  