import React from 'react'

function Instamart() {
  return (
    <div>
        <h1 className='font-bold text-6xl text-center shadow-2xl p-4'>Download InstaMart - Grocery Delivery App</h1>
        <img className='h-[400px] mx-auto' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1000/InstamartMicrosite/FooterVisual" alt="" />


        <div className='flex justify-center '>

        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dinstamart%26utm_medium%3Dweblanding%26anid%3Dadmob" target='_blank'>
        <img className='m-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/GooglePlayStore" alt="Play Store" />
        </a>

        <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920?utm_source=instamart&utm_medium=weblanding&utm_campaign=ios" target='_blank'>
        <img className='m-10' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/DownloadAppStore" alt="App Store"  />
        </a>
        </div>
    </div>
  )
}

export default Instamart
