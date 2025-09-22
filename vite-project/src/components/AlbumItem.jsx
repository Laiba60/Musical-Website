import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/album/${id}`)} 
      className="w-full p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img  
        className="rounded w-full h-40 object-cover" 
        src={image} 
        alt={name} 
      />
      <p className="font-bold mt-2 mb-1 truncate">{name}</p>
      <p className="text-slate-200 text-sm line-clamp-2">{desc}</p>
    </div>
  )
}

export default AlbumItem
