import gukalo from '../assets/img/gukalo.png'
import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import bluetit from '../assets/img/bluetit.png'
import UserContext from '../utils/UserContext';

const FoodieTitle =()=>{
    return (
        <img className="h-20 p-2 m-4 rounded-full relative max-md:h-20 max-md:p-0 mb-2" src={bluetit} alt="food villa" />
    );
  };
  
  const FoodHeader =()=>{
    const [isLoggedIn,setIsLoggedLn]=useState(false);


    const {user}=useContext(UserContext);

    return (
      <header className="flex justify-between shadow-xl h-28 bg-gradient-to-r from-blue-900 to-black max-md:justify-center max-md:h-40 max-md:flex-col max-md:items-center ">
      <FoodieTitle/>
      <div className='right flex items-center'>
      <ul className="nav-list flex">
        <Link className="px-10 text-white " to="/"><li>Home</li></Link>
        <Link className="pr-10 text-white " to="/about"><li>About</li></Link>
        <Link className="pr-10 text-white " to="/faq"><li>FAQs</li></Link>
        <Link className="pr-10 text-white " to="/cart"><li>Cart</li></Link>
        <Link className="pr-10 text-white " to="/instamart"><li>Instamart</li></Link>
      </ul>
      <div className='pr-10 mb-4 text-lg flex flex-col '>
      {
        isLoggedIn ? (
          <button className='text-white' onClick={()=>setIsLoggedLn(false)}><i class="fa-regular fa-user-large-slash"></i></button>
          ):(
            <button className='text-white' onClick={()=>setIsLoggedLn(true)}><i class="fa-regular fa-user fa-sm"></i></button>
            )
          }
          <span className='text-white text-xs max-sm:'>{user.name}</span>
      </div>
          </div>
     
      </header>
    )
  }

export default FoodHeader