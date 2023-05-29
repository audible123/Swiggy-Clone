import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function About() {
  const[myInfo,setMyInfo]=useState();

  useEffect(()=>{
    getGitInfo();
  },[]);

  async function getGitInfo(){
    const data = await fetch("https://api.github.com/users/audible123");
    const json = await data.json();
    console.log(json);
    setMyInfo(json);
  }

  return (
    <div className="h-[70vh]  flex justify-center items-center">
    <div className='flex justify-center items-center bg-[#f5f6f6] shadow-2xl max-sm:'>
    <img className='h-64 w-64 m-8 max-sm:h-32 max-sm:w-32' src="https://avatars.githubusercontent.com/u/121515934?v=4" alt="Image not found" />
    <div>
    <h1 className='text-xl mr-16 my-5'>&#x1F603; {myInfo?.name}</h1>
    <h2 className='text-xl mr-16 my-5'>	&#127758; {myInfo?.location}</h2>
    <Link className='text-xl mr-16 my-5' to={myInfo?.html_url}>&#128279; audible123</Link>
    </div>
    </div>
    </div>
  )
}

export default About




