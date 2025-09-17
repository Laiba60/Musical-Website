import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import ArtistProfile from "./pages/ArtistProfile";
import Playlist from "./pages/Playlist";
import SearchResult from "./pages/SearchResult";


export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggleTheme() {
    setDark((d) => !d);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/artistprofile" element={<ArtistProfile />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/searchresult" element={<SearchResult />} />

        </Routes>
      
      
    </div>
  );
}
