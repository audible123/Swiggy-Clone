import React, { useEffect, useState } from 'react'


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
    <div className="h-[70vh]">
    <div className='m-8'>
    <img className='h-48 w-48 rounded-full' src="https://avatars.githubusercontent.com/u/121515934?v=4" alt="Image not found" />
    <h1 className='text-2xl'>{myInfo?.name}</h1>
    <h2 className='text-2xl'>I live in {myInfo?.location}</h2>
    <h2 className='text-2xl'>Followers : {myInfo?.followers}</h2>
    <h2 className='text-2xl'>Following : {myInfo?.following}</h2>
    <h2 className='text-2xl'>Email : {myInfo?.email}</h2>
    <h2 className='text-2xl'>Hireable : {myInfo?.hireable}</h2>
    <h2 className='text-2xl'>Twitter Account : {myInfo?.twitter_username}</h2>
    </div>
    </div>
  )
}

export default About