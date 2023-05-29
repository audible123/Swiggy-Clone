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
        setFaqInfo(json?.data?.issues?.data);
    }

  return (
    <div className='h-[70vh]'>
        <ul className=''>
            {FaqInfo.map((faq,index)=>(
                <QuestionCard key={faq.id} faq={faq}/>
            ))}
        </ul>
    </div>
  );
};

export default Faq;