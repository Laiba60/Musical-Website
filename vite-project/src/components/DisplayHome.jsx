import React from 'react'
import NavBar from './NabBar'
import { albumsData } from '../assets/images/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/images/assets'
import SongsItem from "./SongsItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />

      {/* Featured Charts */}
      <div className="my-5">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Today’s Biggest Hits */}
      <div className="my-5">
        <h1 className="mb-4 font-bold text-2xl">Today’s Biggest Hits</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {songsData.map((item, index) => (
            <SongsItem
              key={index}
              name={item.name}
              id={item.id}
              desc={item.desc}
              image={item.image}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
