import React, { useState } from 'react'
import { TotalPrice,CancelPolicy } from './Cart'
import { GoogleMaps } from '../utils/helper'
import { Link, Outlet } from 'react-router-dom'


function Map({isVisible,setIsVisible}){
    return(
        <div className='m-10 max-sm:col-span-3'>
            {isVisible ? <button className=' h-14 w-full bg-[#fc8019] text-white' onClick={()=>{
            setIsVisible(false)
        }}>Select your address    
        </button> : 
        <button className=' h-14  w-full border border-[#fc8019] ' onClick={()=>{
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
                <button className=' h-14 w-[90%] m-5  bg-[#fc8019] text-white'>SAVE ADDRESS & PROCEED</button>
            </div>
        </div>}
        </div>
    )
}


function Payment({isVisible,setIsVisible}){
    return (
        <div className='m-10 max-sm:col-span-3'>
            {isVisible ?
            <button className='border h-14 w-full bg-[#fc8019] text-white' onClick={()=>{
                setIsVisible(false)
            }}>Choose payment method   
            </button> :
            <button className='border border-[#fc8019] h-14 w-full ' onClick={()=>{
                setIsVisible(true)
            }}>Choose payment method  
            </button>}
            {isVisible && 
            <div className='shadow-2xl'>
            <div className='h-[40vh] grid grid-cols-4 '>
                <ul className=' bg-gray-300  '>
                    <Link to="/mapandpayment"><li className='m-5'>Wallet</li></Link>
                    <Link to="/mapandpayment/UPI"><li className='m-5'>UPI</li></Link>
                    <Link to="/mapandpayment/NetBanking"><li className='m-5'>Net Banking</li></Link>
                    <Link to="/mapandpayment/Credit"><li className='m-5'>Pay Later</li></Link>
                </ul>
                <div className='col-span-3 '>
                    <Outlet/>
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