import React from "react";

function QuestionCard({title,description,isVisible,setIsVisible}){
    return (
        <div className='border border-black mt-6 mx-2'>
            <h3 className='font-bold'>{title}</h3>
            {isVisible ? <button 
            className='cursor-pointer underline' onClick={()=>setIsVisible(false)}
            >Hide</button> : <button 
            className='cursor-pointer underline' onClick={()=>setIsVisible(true)}
            >Show</button>
}
            {isVisible && <p>{description}</p>}
        </div>
    );
};



export default QuestionCard