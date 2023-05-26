import gukalo from '../assets/img/gukalo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bluetit from '../assets/img/bluetit.png'

const FoodieTitle =()=>{
    return (
        <img className="h-20 p-2 m-4 rounded-full" src={bluetit} alt="food villa" />
    );
  };
  
  const FoodHeader =()=>{
    const [isLoggedIn,setIsLoggedLn]=useState(false);
    return (
      <header className="flex justify-between shadow-lg bg-gradient-to-r from-blue-900 to-black">
      <FoodieTitle/>
      <ul className="flex py-10 sm:py-5">
        <Link className="px-2 text-lg mx-5 my-3 text-white " to="/"><li>Home</li></Link>
        <Link className="px-2 text-lg mx-5 my-3 text-white " to="/about"><li>About</li></Link>
        <Link className="px-2 text-lg mx-5 my-3 text-white " to="/contact"><li>Contact</li></Link>
        <Link className="px-2 text-lg mx-5 my-3 text-white " to="/cart"><li>Cart</li></Link>
        <Link className="px-2 text-lg mx-5 my-3 text-white " to="/instamart"><li>Instamart</li></Link>
      </ul>
      <div className='px-2 text-lg m-10'>
      {
       isLoggedIn ? (
        <button className='text-white text-lg' onClick={()=>setIsLoggedLn(false)}><i class="fa-regular fa-user-large-slash"></i></button>
      ):(
        <button className='text-white' onClick={()=>setIsLoggedLn(true)}><i class="fa-regular fa-user fa-lg"></i></button>
      )
     }
      </div>
     
      </header>
    )
  }

export default FoodHeader