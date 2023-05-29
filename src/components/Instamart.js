import { title } from 'process';
import React, { useEffect, useState } from 'react';

function Section({title,description,isVisible,setIsVisible}){
    return (
        <div className='shadow-xl mt-6 mx-2'>
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
    const [visiblecomp,setVisiblecomp]=useState("What is Swiggy Customer Care Number");
    return (
        <div className='h-[70vh]'>
            <Section
            title={"What is Swiggy Customer Care Number"}
            description={"We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly."}
            isVisible={visiblecomp==="about"}
            setIsVisible={()=>setVisiblecomp("about")} />
            
            <Section
            title={"I entered the wrong CVV, why did my transaction still go through?"}
            description={"The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information."}
            isVisible={visiblecomp==="team"}
            setIsVisible={()=>setVisiblecomp("team")} />

            <Section
            title={"I want to explore career opportunities with Swiggy"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda maiores dolorem quam dolorum delectus accusantium harum quisquam adipisci?"}
            isVisible={visiblecomp==="career"}
            setIsVisible={()=>setVisiblecomp("career")} />

            <Section
            title={"Can I edit my order"}
            description={"In order to edit your order, please click on \"Help\" and then \"I wantto modify items in my order\". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started."}
            isVisible={visiblecomp==="faq"} 
            setIsVisible={()=>setVisiblecomp("faq")}/>

            <Section
            title={"I want to cancel my order"}
            description={"In order to cancel your order, please click on \"Help\" and then \"I want to cancel my order\". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders."}
            isVisible={visiblecomp==="faq"} 
            setIsVisible={()=>setVisiblecomp("faq")}/>
        </div> 
    )
}

export default Instamart