import gukalo from '../assets/img/gukalo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodieTitle =()=>{
    return (
        <img  src={gukalo} alt="food villa" className='logo'/>
    );
  };
  
  const FoodHeader =()=>{
    const [isLoggedIn,setIsLoggedLn]=useState(false);
    return (
      <header className='FoodHeader'>
      <FoodieTitle/>
      <ul className="foodienav">
        <Link style={{textDecoration: 'none',color:"white",margin:"10px"}} to="/"><li>Home</li></Link>
        <Link style={{textDecoration: 'none',color:"white",margin:"10px"}} to="/about"><li>About</li></Link>
        <Link style={{textDecoration: 'none' ,color:"white",margin:"10px"}} to="/contact"><li>Contact</li></Link>
        <Link style={{textDecoration: 'none',color:"white",margin:"10px"}} to="/cart"><li>Cart</li></Link>
      </ul>
      <div className='login-btn'>
      {
       isLoggedIn ? (
        <button onClick={()=>setIsLoggedLn(false)}>Logout</button>
      ):(
        <button onClick={()=>setIsLoggedLn(true)}>Login</button>
      )
     }
      </div>
     
      </header>
    )
  }

export default FoodHeader