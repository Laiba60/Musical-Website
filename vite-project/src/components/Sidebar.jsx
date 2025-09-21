import React, { use } from 'react'
import {assets} from '../assets/images/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className="w-[25%] h-full flex-col p-2 gap-2 hidden text-white lg:flex">
    <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
    <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
    <img className="w-6" src={assets.home_icon} alt=""/>
    <p className="font-bold">Home</p>
    </div>
    <div className="flex items-center gap-3 pl-8 cursor-pointer">
    <img className="w-6" src={assets.search_icon} alt=""/>
    <p className="font-bold">Search</p>
    </div>
    </div>
    <div className="h-[85%] rounded bg-[#121212]">
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3"> 
                <img src={assets.stack_icon} alt="" className="w-8"/>
                <p className="font-semibold">Your Libraray</p>

            </div>
            <div className="flex  items-center gap-3">
                <img className="w-5" src={assets.arrow_icon} alt=""/>
                <img className="w-5" src={assets.plus_icon} alt=""/>

            </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create Your First Playlist</h1>
            <p className="font-light">Its Easy we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
        </div>
         <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Lets find some podcasts to follow</h1>
            <p className="font-light">we will keep you update on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browsw podcasts</button>
        </div>
    </div>
    </div>
  )
}

export default Sidebar