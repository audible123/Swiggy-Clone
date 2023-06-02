import React from 'react'
import { useSelector } from 'react-redux'
import { clearCart } from '../utils/CartSlice'
import { useDispatch } from 'react-redux'
import store from '../utils/Store'
import {MenuCard} from './MenuCard'

function handleClearCart(){
    dispatch(clearCart());
}


function Cart(){

    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className='min-h-screen m-4 flex flex-wrap flex-col'>
            <h1 className='font-bold'>Cart Items-{cartItem.length}</h1>
            <button className='border bg-blue-100 p-1' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>
            <div className=''>
            <div className='flex flex-wrap flex-row '>
                {cartItem.map((food)=>(
                    <MenuCard key={food.id} {...food}/> 
                    ))}
            </div>
            </div>
        </div>
    )
}

export default Cart