import React from 'react';


const Shimmer = () => {
    return (
      <div className="w-52 h-52 bg-slate-300 m-5">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    )
   };
   
export default Shimmer;