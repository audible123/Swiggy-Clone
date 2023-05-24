import React, { useEffect, useState } from 'react'

function useOnline() {
    [isOnline,setOnline]=useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnline(true);
        })
        window.addEventListener("offline",()=>{
            setOnline(false);
        })
    })
  return isOnline;
}

export default useOnline