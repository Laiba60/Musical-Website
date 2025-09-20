import React from 'react'
import NavBar from './NabBar'
import {albumsData} from '../assets/images/assets'
import AlbumItem from './AlbumItem'
import {songsData} from '../assets/images/assets'
import SongsItem from "./SongsItem";


const DisplayHome = () => {
  return (
   <>
   <NavBar/>
   <div className="my-5 font-bold text-2xl">
    <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
    <div className="flex">
    {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    
   </div>
 <div className="my-5">
  <h1 className="mb-4 font-bold text-2xl">Today’s Biggest Hits</h1>
  <div className="flex ">
    {songsData.map((item, index) => (
      <SongsItem
        key={index}
        name={item.name}
        desc={item.desc}
        image={item.image}
        bgColor={item.bgColor} // optional if you want color
      />
    ))}
  </div>
</div>


   </>
  )
}

export default DisplayHome