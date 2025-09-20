import React from 'react';

const SongsItem = ({ name, image, desc, bgColor }) => {
  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:opacity-80 transition"
      style={{ backgroundColor: bgColor || '#1e1e1e' }}
    >
      <img src={image} alt={name} className="rounded w-full h-40 object-cover" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongsItem;
