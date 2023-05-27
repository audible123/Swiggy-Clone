import gukalo from '../assets/img/gukalo.png'
import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import bluetit from '../assets/img/bluetit.png'
import UserContext from '../utils/UserContext';

const FoodieTitle =()=>{
    return (
        <img className="h-20 p-2 m-4 rounded-full" src={bluetit} alt="food villa" />
    );
  };
  
  const FoodHeader =()=>{
    const [isLoggedIn,setIsLoggedLn]=useState(false);


    const {user}=useContext(UserContext);

    return (
      <header className="flex justify-between shadow-lg bg-gradient-to-r from-blue-900 to-black">
      <FoodieTitle/>
      <ul className="flex py-10 sm:py-5">
        <Link className="px-2 text-xl mx-5 my-5 text-white " to="/"><li>Home</li></Link>
        <Link className="px-2 text-xl mx-5 my-5 text-white " to="/about"><li>About</li></Link>
        <Link className="px-2 text-xl mx-5 my-5 text-white " to="/faq"><li>FAQs</li></Link>
        <Link className="px-2 text-xl mx-5 my-5 text-white " to="/cart"><li>Cart</li></Link>
        <Link className="px-2 text-xl mx-5 my-5 text-white " to="/instamart"><li>Instamart</li></Link>
      </ul>
      <div className='px-2 text-lg m-10 flex flex-col'>
      {
        isLoggedIn ? (
          <button className='text-white text-lg' onClick={()=>setIsLoggedLn(false)}><i class="fa-regular fa-user-large-slash"></i></button>
          ):(
            <button className='text-white' onClick={()=>setIsLoggedLn(true)}><i class="fa-regular fa-user fa-sm"></i></button>
            )
          }
          <span className='text-white text-sm'>{user.name}</span>
      </div>
     
      </header>
    )
  }

export default FoodHeader