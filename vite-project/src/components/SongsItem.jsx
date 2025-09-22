import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongsItem = ({ name, image, desc, bgColor, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div 
      onClick={() => playWithId(id)}
      className="w-full p-2 rounded cursor-pointer hover:opacity-80 transition"
      style={{ backgroundColor: bgColor || "#1e1e1e" }}
    >
      <img 
        src={image} 
        alt={name} 
        className="rounded w-full h-40 object-cover" 
      />
      <p className="font-bold mt-2 mb-1 truncate">{name}</p>
      <p className="text-slate-200 text-sm line-clamp-2">{desc}</p>
    </div>
  );
};

export default SongsItem;
