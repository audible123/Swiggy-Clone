import React from "react";

function RestaurantNotFound(){
    return (
        <div className="null-restaurant" style={{height:"40vh"}}>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck" alt="Error" />
          <h1>Oh ! All the restaurants are currently unserviceable</h1>
          <h3>All restaurant are unserviceable,check back in some time.</h3>
        </div>
      );

}

export default RestaurantNotFound