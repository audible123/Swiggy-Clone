import React from 'react'
import { useSelector } from 'react-redux'
import { clearCart } from '../utils/CartSlice'
import { useDispatch } from 'react-redux'
import store from '../utils/Store'
import FoodCard from './FoodCard'


function handleClearCart(){
    dispatch(clearCart());
}


function Cart(){

    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className='h-[70vh] m-4'>
            <h1 className='font-bold'>Cart Items-{cartItem.length}</h1>
            <div>
                {cartItem.map((food)=>(
                    <FoodCard key={food.id} {...food}/> 
                    ))}
            </div>
            <button className='border bg-blue-100 p-1' onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>

        </div>
    )
}

export default Cart