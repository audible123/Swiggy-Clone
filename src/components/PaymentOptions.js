import React from "react";
import { Link } from "react-router-dom";

export function UPI (){
    return (
        <div>
            <h1>Pay via New VPA</h1>
            <h1>You must have a Virtual Payment Address</h1>
            <input type="text" placeholder="Enter VPA"/>
            <button className="bg-green-500 text-white p-2 w-full">Pay{}</button>
        </div>
    )
}


export function Wallet(){
    return (
        <div className="flex flex-col h-auto">
            <div className="border border-gray-200 m-3">
                <img 
                className="h-6 " src="https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs" alt="" />
                <h1>Paytm</h1>
                <Link><h1 className="text-orange-400">Link Account</h1></Link>   
            </div>
            <div className="border border-gray-200 m-3">
                <img className="h-6 " src="https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s" alt="" />
                <h1>PhonePe</h1>
                <Link><h1 className="text-orange-400">Link Account</h1></Link>   
            </div>
            <div  className="border border-gray-200 m-3">
                <img className="h-6 " src="https://pbs.twimg.com/profile_images/1357660674034307072/joI-ag9h_400x400.jpg" alt="" />
                <h1>Gpay</h1>
                <Link><h1 className="text-orange-400">Link Account</h1></Link>   
            </div>
            
            
        </div>
    )
}


export function Sodexo(){
    return (
        <div>
            <h1>Add new food card</h1>
            <h1>We Accept Sudexo</h1>
            <div>
                <input className="border border-gray-500 " type="text" placeholder="Card number"/>
                <input className="border border-gray-500 " type="text" placeholder="Valid Through"/>
                <input className="border border-gray-500 " type="text" placeholder="CVV"/>
                <input className="border border-gray-500 " type="text" placeholder="Name on Card"/>
            </div>
            <button className="bg-green-500 text-white p-2 w-full mx-3">Pay{}</button>
        </div>
    )
}


export function NetBanking(){
    return (
        <div className="flex">
            <div className="border border-gray-200 m-5 p-5">
                <img className="h-16 w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" alt="" />
                <h1>SBI</h1>
            </div>
            <div className="border border-gray-200 m-5 p-5">
                <img className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yCVHoG8YlKJ6KyOLHBxX5LZDHDCB1P87PGB-JjWDUw&usqp=CAU&ec=48600112" alt="" />
                <h1>Other Banks</h1>
            </div>
        </div>
    )
}

export function Credit(){
    return (
        <div>
            <h1>Add new card</h1>
            <div>
                <input className="border border-gray-500 " type="text" placeholder="Card number"/>
                <input className="border border-gray-500 " type="text" placeholder="Valid Through"/>
                <input className="border border-gray-500 " type="text" placeholder="CVV"/>
                <input className="border border-gray-500 " type="text" placeholder="Name on Card"/>
            </div>
            <button className="bg-green-500 text-white p-2 w-full">Pay{}</button>
        </div>
    )
}