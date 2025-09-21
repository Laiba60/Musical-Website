import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/images/assets";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0] || null);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    setTrack(songsData[id]);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Play error:", err);
        });
        setPlayStatus(true);
      }
    }, 0);
  };
  const previous =async ()=>{
    if(track.id>0){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true);

    }

  }
  const next =async ()=>{
    if(track.id<songsData.length-1){
      await setTrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true);

    }

  }
  const seekSong=async (e)=>{
  audioRef.current.currentTime=(e.nativeEvent.offsetX/e.target.clientWidth)*audioRef.current.duration;

  }
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = () => {
      if (!audioRef.current) return;
      seekBar.current.style.width = `${
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      }%`;
      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };
  }, [track]);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext };
export default PlayerContextProvider;
