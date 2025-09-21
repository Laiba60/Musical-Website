import { assets } from "../assets/images/assets";
import { PlayerContext } from "../context/PlayerContext";
import React, { useContext } from "react";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  if (!track) return null; // ✅ safety

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Track Info */}
      <div className="hidden lg:flex gap-4">
        <img className="w-12" src={track.image} alt="track" />

        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
          ) : (
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
          <p className="text-[12px]">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>

      {/* Extra Controls */}
      <div className="hidden lg:flex gap-2 items-center opacity-75">
        <img src={assets.plays_icon} alt="" className="w-5" />
        <img src={assets.mic_icon} alt="" className="w-5" />
        <img src={assets.queue_icon} alt="" className="w-5" />
        <img src={assets.speaker_icon} alt="" className="w-5" />
        <img src={assets.volume_icon} alt="" className="w-5" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="" className="w-5" /> {/* ✅ fixed */}
        <img src={assets.zoom_icon} alt="" className="w-5" />
      </div>
    </div>
  );
};

export default Player;
