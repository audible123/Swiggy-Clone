import React from 'react'
import { useState,useEffect } from 'react';
import QuestionCard from './QuestionCard';

function Faq() {
    const[FaqInfo,setFaqInfo]=useState();
    const [visiblecomp,setVisiblecomp]=useState("about");

    useEffect(()=>{
        getFaqInfo();
    },[])

    async function getFaqInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/support/issues/faq?");
        const json= await data.json();
        setFaqInfo(json?.data?.issues);
    }

  return (
    <div className='h-[70vh]'>
        <ul className=''>
            {FaqInfo.map((faq,index)=>(
                <QuestionCard key={index} faq={faq}/>
            ))}
        </ul>
    </div>
  );
};

export default Faq;


function Instamart(){
    return (
        <div className='h-[70vh]'>
            <Section
            title={"about"}
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
