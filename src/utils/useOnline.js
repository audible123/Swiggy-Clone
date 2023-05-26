import React, { useEffect, useState } from 'react'

function useOnline() {
    const [isOnline,setOnline]=useState(true);

    useEffect(()=>{
        const handleOnline=()=>{
            setOnline(true);
        };
        const handleOffline =()=>{
            setOnline(false);
        };
        
        return ()=>{
            window.addEventListener("online",handleOnline);
            window.addEventListener("offline",handleOffline);
        };
       
    },[]);

    return isOnline;

};

export default useOnline