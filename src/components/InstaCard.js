import React from 'react'

const InstaCard =({

}) => {
    

    return (
        <div className="w-40 h-56 p-3 shadow-md hover:border-b-2 hover:shadow-2xl max-sm:w-[200px] max-sm:h-64">
        <div  className="w-full">
            <img src="" alt="" />
        </div>
        <div className="w-full text-xs" >
            <h2 className="font-bold text-sm my-1 max-sm:text">{/*name8*/}</h2>
            <h3>{/*pieces*/}</h3>
            <h3>{/*price*/}</h3>
            <button onClick={()=>handleClick()}>Add</button>
        </div>
        </div>
    )
}

export default InstaCard