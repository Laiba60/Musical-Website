import React from 'react'
import NavBar from './NabBar'
import { useParams } from 'react-router-dom'
import {albumsData} from '../assets/images/assets'          
const DisplayAlbum = () => {
    const {id}=useParams();
   const albumData=albumsData[id];
   console.log(albumsData);
  return (
    <>
    <NavBar/>
    <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded"/>
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2> 
            <h4>{albumData.dec}</h4>
            <p className="mt-1">
                <img className="inline-block w-5" src={assets.spotify_logo} />
                <b>Spotify</b>
                .1,323,154
                .<b>50 ,songs</b>
            </p>

        </div>

    </div>
    </>
  )
}

export default DisplayAlbum