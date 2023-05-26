import { title } from 'process';
import React, { useState } from 'react';



function Section({title,description}){
    [isVisible,setIsVisible]=useState(false);
    return (
        <div className='border border-black mt-6 mx-2'>
            <h3>{title}</h3>
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



function Instamart(){
    return (
        <div className='h-[70vh]'>
            <h1 className='text-center text-4xl
            '>InstaMart Page</h1>
            <Section
            title={"About"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"} />
            
            <Section
            title={"Team of Instamart"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"} />
            <Section
            title={"Careers"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"} />
            <Section
            title={"FAQs"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"} />
        </div>
    )
}

export default Instamart