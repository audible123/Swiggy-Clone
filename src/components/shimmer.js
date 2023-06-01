import React from 'react';


const Shimmer = () => {
    return (
      <div className="m-5 flex flex-wrap  h-[79vh] flex-col">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimer-body  bg-slate-300 h-[200px] w-[200px] m-5"></div>
          ))}
      </div>
    )
   };
   
export default Shimmer;