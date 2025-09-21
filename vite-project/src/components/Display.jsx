import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/images/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? Number(location.pathname.split("/").pop()) : null;
  const bgColor =
    isAlbum && albumsData[albumId - 1]
      ? albumsData[albumId - 1].bgColor
      : "#121212"; // fallback

  useEffect(() => {
    if (isAlbum && displayRef.current) {
      displayRef.current.style.background = `linear-gradient(180deg, ${bgColor} 0%, #121212 100%)`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 rounded bg-[#121212] h-[85%] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
