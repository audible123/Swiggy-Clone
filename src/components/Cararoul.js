import React,{useRef, useState} from 'react'

function Cararoul() {

  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  let scrl = useRef(null);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollEnd(scrl.current.scrollLeft);
    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className='flex my-5 relative'>

          <button
            className="bg-gray-700 font-bold w-16 h-[5rem] p-2 mx-2 absolute my-20 text-white opacity-40 hover:opacity-80 rounded-full"
            onClick={() => slide(-100)}
          >
            L
          </button>

    <div
    ref={scrl}
    onScroll={scrollCheck}
    className='bg-[#171a29] flex overflow-x-hidden'
    >
      <img 
      className='m-5 w-80'
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3" 
      alt="" />

      <img 
      className='m-5 w-80'
      
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo" alt="" />

      <img 
      className='m-5 w-80'
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" alt="" />

      <img 
      className='m-5 w-80'
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" alt="" />

      <img 
      className='m-5 w-80'
      src="https://www.fabpromocodes.in/uploads/blogs/swiggy-coupons.jpg" alt="" />
    </div>

          <button
            className="bg-gray-700 font-bold w-16 h-[5rem] p-2 mx-2 my-20 absolute right-0 text-white opacity-40 hover:opacity-80 rounded-full"
            onClick={() => slide(+100)}
          >
            R
          </button>

    </div>
  )
}

export default Cararoul