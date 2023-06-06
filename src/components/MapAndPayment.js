import React, { useState } from 'react'
import { TotalPrice,CancelPolicy } from './Cart'
import { GoogleMaps } from '../utils/helper'


function Map({isVisible,setIsVisible}){
    return(
        <div className='m-10 max-sm:col-span-3'>
            {isVisible ? <button className=' h-14 w-full bg-gradient-to-r border border-blue-900 from-blue-900 to-black text-white' onClick={()=>{
            setIsVisible(false)
        }}>Select your address    
        </button> : 
        <button className=' h-14  w-full border border-blue-900 ' onClick={()=>{
            setIsVisible(true)
        }}>Select your address    
        </button>}
        {isVisible && 
        <div className='h-[85vh] shadow-2xl'>
            <div>
            <div className='font-bold text-2xl m-3'>Save delivery address</div>
            <GoogleMaps/>
            <div className='m-2' >
                <input type="text" placeholder='Door/Flat No.' className='border border-gray-400 h-[70px] w-[100%] text-[17px] px-[20px] pt-[22px] box-border whitespace-nowrap overflow-x-hidden text-ellipsis font-semibold' />
                {/* <div><label class="" for="building">Door/Flat No.</label></div> */}
            </div>
            <div className='m-2'>
                <input type="text" placeholder='Landmark' className='border border-gray-400 h-[70px] w-[100%] text-[17px] px-[20px] pt-[22px] box-border whitespace-nowrap overflow-x-hidden text-ellipsis font-semibold' />
                {/* <div><label class="" for="landmark" className=''>Landmark </label></div> */}
            </div>
                <button className=' h-14 w-[90%] m-5 bg-gradient-to-r border border-blue-900 from-blue-900 to-black text-white'>SAVE ADDRESS & PROCEED</button>
            </div>
        </div>}
        </div>
    )
}



function Payment({isVisible,setIsVisible}){
    return (
        <div className='m-10 max-sm:col-span-3'>
            {isVisible ?
            <button className='border border-blue-900 h-14 w-full bg-gradient-to-r from-blue-900 to-black text-white' onClick={()=>{
                setIsVisible(false)
            }}>Choose payment method   
            </button> :
            <button className='border border-blue-900 h-14 w-full ' onClick={()=>{
                setIsVisible(true)
            }}>Choose payment method  
            </button>}
            {isVisible && 
            <div className='shadow-2xl'>
            <div className='h-[40vh] grid grid-cols-4 '>
                <div className=' bg-gray-200'>
                    <h1 className='m-5'>Wallet</h1>
                    <h1 className='m-5'>UPI</h1>
                    <h1 className='m-5'>Net Banking</h1>
                    <h1 className='m-5'>Pay Later</h1>
                </div>
            </div>
            </div>}
        </div>
    )

}



function MapAndPayment() {

    [visibleComp,setVisibleComp]=useState("map");

  return (
    <div className='h-auto grid grid-cols-3'>
        <Map
        isVisible={visibleComp==="map"}
        setIsVisible={()=>setVisibleComp("map")}/>
        

        <Payment
        isVisible={visibleComp==="payment"}
        setIsVisible={()=>setVisibleComp("payment")}/>

        <div className='max-sm:col-span-3'>
        <TotalPrice/>
        <CancelPolicy/>
        </div>
    </div>
  )
}

export default MapAndPayment