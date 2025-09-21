import React, { useContext } from 'react';   // <-- import useContext
import Sidebar from './components/Sidebar';
import Player from './components/Player';    // also check filename case
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext'; // <-- import context

const App = () => {
  const { audioRef,track } = useContext(PlayerContext); // <-- destructure audioRef from context

  return (
    <div className="h-screen bg-black"> 
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
