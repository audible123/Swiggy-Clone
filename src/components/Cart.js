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

    const TotalCost = useSelector((store)=> store.cart.items)

    const deliverycharge = 20 ;
    const gst =15;

    function addCartItem (items){


        const fakeprice = 251;



        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            if(items[i]?.defaultPrice)
            {
                sum += items[i]?.defaultPrice/100;
            }
            else{
                sum += fakeprice;
            }
        }
        
        return (sum);
    }

    const Total = addCartItem(TotalCost);

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
            <h1>{Total}</h1>
            <h1>20</h1>
            <br />
            <hr />
            <h1>15</h1>
        </div>
        <div className=' col-span-3 '>
            <h1 className='font-bold'>Total</h1>
        </div>
        <div className=' col-span-1 '>
            <h1 className='font-bold'>{deliverycharge + Total + gst}</h1>
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

    if(cartItem.length === 0) return (
        <div className="flex justify-center items-center">
        <div className="min-h-[70vh] mt-32">
          <img className="h-[250px] w-auto mb-4 mx-auto" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Error" />
          <h1 className="text-4xl text-center">Your cart is empty</h1>
          <h3 className='text-center'>You can go to home page to view more restaurants</h3>
          <Link to="/">
          <button className=' h-14 w-[90%] m-5 bg-[#fc8019] text-white'>SEE RESTAURANTS NEAR YOU</button>
          </Link>
        </div>
        </div>
    )

    return (
        <div className='min-h-screen m-4 flex flex-wrap flex-col bg-gray-200'>
            <div className='bg-white m-10 p-5'>
            <h1 className='font-bold text-2xl m-5'>Cart Items-{cartItem.length}</h1>
            <button className='shadow-lg text-red-600 border border-red-600 p-3 mx-5 hover:bg-red-600 hover:text-white' onClick={()=>{
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
            <Link to="/mapandpayment" ><button className='shadow-lg text-[#60b246] border border-[#60b246] w-[90%] hover:bg-[#60b246] hover:text-white p-3 mx-5'>Proceed</button>
            </Link>
            <button className='shadow-lg text-red-600 border border-red-600 p-3 mx-5 hover:bg-red-600 hover:text-white ' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>
            </div>
            </div>
        </div>
    )
}
