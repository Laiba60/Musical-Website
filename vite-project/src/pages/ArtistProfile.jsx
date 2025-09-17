import React from "react";
import bgImage from "../assets/images/image.jpeg";

const ArtistProfile = () => {
  return (
    <div
      className="bg-[#121212] text-white"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full min-h-screen flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-black p-4 sm:p-6 flex-shrink-0">
          <div className="flex items-center gap-2 mb-6 sm:mb-10">
            <h1 className="text-xl sm:text-2xl font-bold">TuneIn</h1>
          </div>
          <nav className="flex flex-col gap-3 sm:gap-4">
            <a
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-semibold text-white"
              href="/"
            >
              <span className="material-symbols-outlined">home</span>
              Home
            </a>
            <a
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-400 hover:text-white transition-colors"
              href="/searchresult"
            >
              <span className="material-symbols-outlined">search</span>
              Search
            </a>
            <a
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">library_music</span>
              Your Library
            </a>
          </nav>
          <div className="mt-6 sm:mt-10 flex flex-col gap-3 sm:gap-4">
            <a
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">add_box</span>
              Create Playlist
            </a>
            <a
              className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg font-medium text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">favorite</span>
              Liked Songs
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex flex-wrap items-center justify-between p-4 sm:p-6 sticky top-0 bg-[#121212] bg-opacity-80 backdrop-blur-md z-10 gap-3">
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="bg-white text-black font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full hover:scale-105 transition-transform text-sm sm:text-base">
                Explore Premium
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 sm:size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuSMFZAdnaWOz4JgI3oftFtejKwG9mRQtnzL8b7frpshA761zPFBLOITU6uv4mNfb20T6RiZDf3KxsCKeCp4D4etgHfjpulGMRl_iwqtsXWmt7GJiQCmRLNmIuLsSEVd7CDRSV0BX0-H3Jdk3yxKfl_48rSZHjc3qbqy4D8fN5j6ZNuRYt_Pdi2GXUVycbR8-d87_CZZJ4o-fQ7MH85_tGImI9f43tfZ5mqDoVQxdmPoBmYAxEUxBxso3-VVKVUmNsGv71HWe8g9U")',
                }}
              ></div>
            </div>
          </header>

          {/* Hero Section */}
          <div
            className="relative h-60 sm:h-80 md:h-96 flex items-end p-4 sm:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black">
                Olivia Hayes
              </h1>
              <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
                1,234,567 monthly listeners
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Play & Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <button className="bg-[var(--primary-color)] p-3 sm:p-4 rounded-full hover:bg-green-700 transition-colors shadow-lg">
                <span className="material-symbols-outlined text-2xl sm:text-4xl">
                  play_arrow
                </span>
              </button>
              <button className="border border-white/50 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full hover:border-white transition-colors text-sm sm:text-base">
                Follow
              </button>
              <button className="text-white/70 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  more_horiz
                </span>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap border-b border-white/10 mb-6 sm:mb-8 gap-4 sm:gap-8 text-sm sm:text-base">
              <a className="text-white font-bold pb-3 border-b-2 border-[var(--primary-color)]">
                Overview
              </a>
              <a className="text-gray-400 hover:text-white font-bold pb-3 border-b-2 border-transparent transition-colors">
                Related Artists
              </a>
              <a className="text-gray-400 hover:text-white font-bold pb-3 border-b-2 border-transparent transition-colors">
                About
              </a>
              <a className="text-gray-400 hover:text-white font-bold pb-3 border-b-2 border-transparent transition-colors">
                Concerts
              </a>
            </div>

            {/* Popular Songs */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Popular
              </h2>
              <div className="flex flex-col">
                {/* Example song row */}
                <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 sm:gap-4 p-2 rounded-md hover:bg-white/10 transition-colors group text-sm sm:text-base">
                  <span className="text-gray-400 font-medium w-5 sm:w-6 text-center">
                    1
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10 sm:size-12"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3g58Pnn5K_Lk_xHHgdm9j3wI2u64U0aAaqMeawRJYnIKq3T4MzFfaCAaAT9DGGQDBiF9LR1kJh1AftvNMtmjjZGS5gR7GoNpCREKWPXnZlQ05G7Ek7-YSlU_F0NQI-xbObgaEyvRZwGcXNoRK7EnNRaaH6ecOB1sK6DP3IKgBTWmJf3vjQTquQEAnNKZBjdrqjKNlKzE_GaFAzOYtamfxwkr-IBEQv-BUnh_3IsW2ma9tP65f4DyeK_aYC491yNQ4sxI20eYInuI")',
                      }}
                    ></div>
                    <div>
                      <p className="font-semibold">Midnight Serenade</p>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        2,345,678
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-white cursor-pointer transition-colors">
                      favorite
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      3:45
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Discography */}
            <section className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Discography
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                <div className="bg-[#181818] p-3 sm:p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-md mb-3 sm:mb-4"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE4v85D3ZjFZOaRe5yy3EtyQiLqqhUpdXawQobPcT4b1fMywr_qpx9MmlcLpevCGHBT_m0zy71czYJW-L2N6nA5H4FWBlYy2s1LZYGuwhHQXmbbuV_dnnlEZvQKoEDksgBPJniNfZBL5zjROLhEQ7qKL_oscoY5JuxxzErs5vLXhSznlX5e5oU8889yL7JqFQfbNafD5XKAMvmAceMYsUlv19KDlM-aUaePhMpMJncoKElP21OwPJ9Hf8i3NMlAqeMT9BwJbzPw_0")',
                      }}
                    ></div>
                    <button className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 shadow-lg">
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </button>
                  </div>
                  <p className="font-bold truncate">Whispers of the Night</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    2023 · Album
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArtistProfile;
