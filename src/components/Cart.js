import React from 'react'
import { useSelector } from 'react-redux'
import { clearCart } from '../utils/CartSlice'
import { useDispatch } from 'react-redux'
import {MenuCard} from './MenuCard'
import { Link } from 'react-router-dom'

export function CancelPolicy(){
    return (
        <div className=' mt-10 p-10 m-10 shadow-2xl max-sm:col-span-2 max-sm:h-[40vh] '>
        <h1>Review your order and address details to avoid cancellations</h1>
        <h2>Note: If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.Avoid cancellation as it leads to food wastage.</h2>
        <Link className='text-red-800' to={"https://www.swiggy.com/refund-policy"}>Read cancellation policy</Link>
        </div>
    )
}


export function TotalPrice(){
    return (
        <div className='m-10 shadow-2xl max-sm:col-span-2 p-3 h-[30vh]'>
        <h1 className='font-bold text-4xl m-3'>Summary</h1>
        <div className='grid grid-cols-4 grid-rows-[100px]'>
        <div className=' col-span-3'>
            <h1>Item Total</h1>
            <h1>Delivery partner fee</h1>
            <br />
            <hr />
            <h1>GST </h1>

        </div>
        <div className=''>
            <h1>$1000</h1>
            <h1>$10</h1>
            <br />
            <hr />
            <h1>$65</h1>
        </div>
        <div className=' col-span-3 '>
            <h1 className='font-bold'>Total</h1>
        </div>
        <div className=' col-span-1 '>
            <h1 className='font-bold'>$1000</h1>
        </div>
        
        </div>
        </div>
    )
}

function handleClearCart(){
    dispatch(clearCart());
}


export function Cart(){

    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className='min-h-screen m-4 flex flex-wrap flex-col bg-gray-200'>
            <div className='bg-white m-10 p-5'>
            <h1 className='font-bold my-5'>Cart Items-{cartItem.length}</h1>
            <button className='border bg-blue-100 p-1 h-10 w-28' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>
            <div className=''>
            <div className='flex flex-wrap flex-row '>
                {cartItem.map((food)=>(
                    <MenuCard key={food.id} {...food}/> 
                    ))}
            </div>
            </div>
            <div className='grid grid-cols-2'>
            <TotalPrice/>
            <CancelPolicy/>
            </div>
            <div className='flex justify-end m-10 max-sm:justify-evenly'>
            <Link to="/mapandpayment" ><button className='border bg-blue-100 p-1 h-10 m-4 w-28'>Proceed</button>
            </Link>
            <button className='border bg-blue-100 p-1 h-10 m-4 w-28' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>
            </div>
            </div>
        </div>
    )
}
