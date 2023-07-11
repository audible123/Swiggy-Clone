import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import bluetit from '../assets/img/bluetit.png'
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { FoodieTitle } from '../utils/helper';




  
  const FoodHeader =()=>{
    const [isLoggedIn,setIsLoggedLn]=useState(false);
    
    const cartItem = useSelector((store) => store.cart.items) 

    const {user}=useContext(UserContext);

    return (
      <header className="flex justify-between shadow-xl h-24  max-md:justify-center max-md:h-40 max-md:flex-col max-md:items-center overflow-x-hidden overflow-y-hidden">
      <FoodieTitle/>
      <div className='right flex items-center'>
      <ul className="nav-list flex">

        <Link 
        className="px-10 text-black font-semibold hover:text-[#fc8019]" 
        to="/"><li>Home</li></Link>

        <Link 
        className="pr-10 text-black font-semibold hover:text-[#fc8019]" 
        to="/faq"><li>FAQs</li></Link>

        <Link 
        className="pr-10 text-black font-semibold hover:text-[#fc8019]" 
        to="/cart"><li>Cart - {cartItem.length}</li></Link>

        <Link 
        className="pr-10 text-black font-semibold hover:text-[#fc8019]" to="/instamart"><li>Instamart</li></Link>

        <Link 
        to="login"
        className="pr-10 text-black font-semibold hover:text-[#fc8019]"><li>Sign In</li></Link>
      </ul>
      {/* <div className='pr-10 mb-4 text-lg flex flex-col '>
      {
        isLoggedIn ? (
          <button className='text-black font-semibold hover:text-[#fc8019]' onClick={()=>setIsLoggedLn(false)}><i class="fa-regular fa-user-large-slash"></i></button>
          ):(
            <button className='text-black font-semibold hover:text-[#fc8019]' onClick={()=>setIsLoggedLn(true)}><i class="fa-regular fa-user fa-sm"></i></button>
            )
          }
          <span className='text-black font-semibold hover:text-[#fc8019] text-xs max-sm:'>{user.name}</span>
      </div> */}
          </div>
     
      </header>
    )
  }

export default FoodHeader