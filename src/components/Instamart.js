import { title } from 'process';
import React, { useEffect, useState } from 'react';

function Section({title,description,isVisible,setIsVisible}){
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



function Instamart(){
    const [visiblecomp,setVisiblecomp]=useState("about");
    const[FaqInfo,setFaqInfo]=useState();


    useEffect(()=>{
        getFaqInfo();
    })

    async function getFaqInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/support/issues/faq?");
        const json= await data.json();
        setFaqInfo(json?.data?.data);
        console.log(json?.data?.data);
    }

    return (
        <div className='h-[70vh]'>
            <h1 className='text-center text-4xl
            '>InstaMart Page</h1>

            <h1>{FaqInfo}</h1>

            <Section
            title={"About"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"}
            isVisible={visiblecomp==="about"}
            setIsVisible={()=>setVisiblecomp("about")} />
            
            <Section
            title={"Team of Instamart"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"}
            isVisible={visiblecomp==="team"}
            setIsVisible={()=>setVisiblecomp("team")} />

            <Section
            title={"Careers"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"}
            isVisible={visiblecomp==="career"}
            setIsVisible={()=>setVisiblecomp("career")} />

            <Section
            title={"FAQs"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"}
            isVisible={visiblecomp==="faq"} 
            setIsVisible={()=>setVisiblecomp("faq")}/>
        </div>

        
    )
}

export default Instamart