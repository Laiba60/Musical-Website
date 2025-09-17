
import React from 'react'

const ArtistProfile = () => {
  return (
    <div className="bg-[#121212] text-white" style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
>
<div className="flex h-full min-h-screen">
<aside className="w-64 bg-black p-6 flex-shrink-0">
<div className="flex items-center gap-2 mb-10">

<h1 className="text-2xl font-bold">TuneIn</h1>
</div>
<nav className="flex flex-col gap-4">
<a className="flex items-center gap-4 text-lg font-semibold text-white" href="/">
<span className="material-symbols-outlined">home</span>
            Home
          </a>
<a className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-white transition-colors" href="/searchresult">
<span className="material-symbols-outlined">search</span>
            Search
          </a>
<a className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">library_music</span>
            Your Library
          </a>
</nav>
<div className="mt-10 flex flex-col gap-4">
<a className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">add_box</span>
            Create Playlist
          </a>
<a className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined">favorite</span>
            Liked Songs
          </a>
</div>
</aside>
<main className="flex-1">
<header className="flex items-center justify-between p-6 sticky top-0 bg-[#121212] bg-opacity-80 backdrop-blur-md z-10">
<div className="flex items-center gap-4">
<button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform">
              Explore Premium
            </button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuSMFZAdnaWOz4JgI3oftFtejKwG9mRQtnzL8b7frpshA761zPFBLOITU6uv4mNfb20T6RiZDf3KxsCKeCp4D4etgHfjpulGMRl_iwqtsXWmt7GJiQCmRLNmIuLsSEVd7CDRSV0BX0-H3Jdk3yxKfl_48rSZHjc3qbqy4D8fN5j6ZNuRYt_Pdi2GXUVycbR8-d87_CZZJ4o-fQ7MH85_tGImI9f43tfZ5mqDoVQxdmPoBmYAxEUxBxso3-VVKVUmNsGv71HWe8g9U")'}}></div>
</div>
</header>
<div className="relative h-96 flex items-end p-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0qZbLj7cnMRvFc1xGJinXZVofYGYNeP7Pe0YHrRemC9FfngfGIeWooLz2LIX58DNZnFHKT53szSkRICbqLiJ0LWI_8zUMlwhLsqNlvEHl0eEuaRvxu0VFkFy9CJ_ZVf3TjynzUjyg08E5CJAHK8ulee5dKj8kLyRtYj8CoCZcyf3twjfIDCdb3avP0fZkAxJ6R5TkD9bjDaPDM4LaD4fGYdaHPrkeQyCu0KT7iSJq_6CCvuCKQUxa4vsZg2RqO2J2qxPuVO3gq8s"); background-size: cover; background-position: center'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="relative z-10">
<h1 className="text-7xl font-black">Olivia Hayes</h1>
<p className="text-gray-300 mt-2">1,234,567 monthly listeners</p>
</div>
</div>
<div className="p-8">
<div className="flex items-center gap-8 mb-8">
<button className="bg-[var(--primary-color)] p-4 rounded-full hover-bg-primary-darker transition-colors shadow-lg">
<span className="material-symbols-outlined text-4xl">play_arrow</span>
</button>
<button className="border border-white/50 text-white font-bold py-2 px-6 rounded-full hover:border-white transition-colors">
              Follow
            </button>
<button className="text-white/70 hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">more_horiz</span>
</button>
</div>
<div className="flex border-b border-white/10 mb-8 gap-8">
<a className="text-white text-sm font-bold pb-3 border-b-2 border-[var(--primary-color)]" href="#">Overview</a>
<a className="text-gray-400 hover:text-white text-sm font-bold pb-3 border-b-2 border-transparent transition-colors" href="#">Related Artists</a>
<a className="text-gray-400 hover:text-white text-sm font-bold pb-3 border-b-2 border-transparent transition-colors" href="#">About</a>
<a className="text-gray-400 hover:text-white text-sm font-bold pb-3 border-b-2 border-transparent transition-colors" href="#">Concerts</a>
</div>
<section>
<h2 className="text-2xl font-bold mb-6">Popular</h2>
<div className="flex flex-col">
<div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors group">
<span className="text-gray-400 font-medium w-6 text-center">1</span>
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3g58Pnn5K_Lk_xHHgdm9j3wI2u64U0aAaqMeawRJYnIKq3T4MzFfaCAaAT9DGGQDBiF9LR1kJh1AftvNMtmjjZGS5gR7GoNpCREKWPXnZlQ05G7Ek7-YSlU_F0NQI-xbObgaEyvRZwGcXNoRK7EnNRaaH6ecOB1sK6DP3IKgBTWmJf3vjQTquQEAnNKZBjdrqjKNlKzE_GaFAzOYtamfxwkr-IBEQv-BUnh_3IsW2ma9tP65f4DyeK_aYC491yNQ4sxI20eYInuI")'}}></div>
<div>
<p className="font-semibold">Midnight Serenade</p>
<p className="text-gray-400 text-sm">2,345,678</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-400 group-hover:text-white cursor-pointer transition-colors">favorite</span>
<span className="text-gray-400 text-sm">3:45</span>
</div>
</div>
<div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors group">
<span className="text-gray-400 font-medium w-6 text-center">2</span>
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9NT45knsf8XJUxOCCkBp71Ko21eTyEHgcj5_8rjMt1YO16_hemwwq64kbeiXtH-AvWj-pbVnFkZ5Bh7D9_SRJs0H7RsPsicftgZEtkxVcFG7S2fISgJ3ewh6RYGD1tp7KgtblbF4u-MHjLg9S1peLxuq8R1wGs-QsfEvs_ED_d_2qbfcwGqa175soTrx73aF1BrKL0rkFBYgnIrKlVK4x935Sa4tnzOGLRIDbFXrzXNksvP4ejK5959tjtBxCtxYIl3FApzK0Y2Y")'}}></div>
<div>
<p className="font-semibold">City Lights</p>
<p className="text-gray-400 text-sm">1,987,456</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-400 group-hover:text-white cursor-pointer transition-colors">favorite</span>
<span className="text-gray-400 text-sm">4:12</span>
</div>
</div>
<div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors group">
<span className="text-gray-400 font-medium w-6 text-center">3</span>
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn6F8U4PT3RgQ0H0HfcuZAfdw0LpBc4xFbfDXXS2_NwdJUHoo3FNpA1rcD98ybQ68_enTBB-2OGaydK_sqHlpjM7B93ldggQ1tRyP0cGCbsCkX4QGgYtjUheZ08lpMwHeuvHHdTQwF3Of2dkIUD4oPe1a-Z37dd_bWifCcxNCOVTtBjaX96QUGyYCWzOZpvZC8F4fsvpZsQ-RKCIxIPkXTcxgFAMMumP_0jrwVDZrUWDMmaVSb9kkmHZ3zkdI2Wq3EFKN19yUZ72s")'}}></div>
<div>
<p className="font-semibold">Lost in Dreams</p>
<p className="text-gray-400 text-sm">1,543,987</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-400 group-hover:text-white cursor-pointer transition-colors">favorite</span>
<span className="text-gray-400 text-sm">3:58</span>
</div>
</div>
<div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 p-2 rounded-md hover:bg-white/10 transition-colors group">
<span className="text-gray-400 font-medium w-6 text-center">4</span>
<div className="flex items-center gap-4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTRHn62I0D6_QzykIwaHV8aAhZmylVS2PSFq36oWq7fu4Xc6k2PZVotMzWEH_P7tZLk6RfDsD8vNJh4L66ejwB9qsODztdYz-ddSksVwILoIy7Jg-gDPpTJI9F7zWdcQrbfFv1WkHiZX2G4sLP-CEDFT846rT4wGya8Qt25YJJJtpF_LpL28285DzByZgeKxpRliSh6ySgxt1DTcA0slrh7Sf47X8tS__8UlSJdHnEkmczBZtok_h3arJlTSsjmyDWqtxyMp-8j08")'}}></div>
<div>
<p className="font-semibold">Echoes of the Past</p>
<p className="text-gray-400 text-sm">1,210,345</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-gray-400 group-hover:text-white cursor-pointer transition-colors">favorite</span>
<span className="text-gray-400 text-sm">4:30</span>
</div>
</div>
</div>
</section>
<section className="mt-12">
<h2 className="text-2xl font-bold mb-6">Discography</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
<div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
<div className="relative">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md mb-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDE4v85D3ZjFZOaRe5yy3EtyQiLqqhUpdXawQobPcT4b1fMywr_qpx9MmlcLpevCGHBT_m0zy71czYJW-L2N6nA5H4FWBlYy2s1LZYGuwhHQXmbbuV_dnnlEZvQKoEDksgBPJniNfZBL5zjROLhEQ7qKL_oscoY5JuxxzErs5vLXhSznlX5e5oU8889yL7JqFQfbNafD5XKAMvmAceMYsUlv19KDlM-aUaePhMpMJncoKElP21OwPJ9Hf8i3NMlAqeMT9BwJbzPw_0")'}}></div>
<button className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 shadow-lg">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
<p className="font-bold truncate">Whispers of the Night</p>
<p className="text-sm text-gray-400">2023 · Album</p>
</div>
<div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
<div className="relative">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md mb-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDm8U6qG4iBN1d_9G5SBTcJVjUcYLV61zKNL0baweterz4VLpNbxToNhJPpdoWslQ3DWos-aOn0rsxBeAIy_XpzVLPbYZbZtiAAp2eSjXNglHIUMQJgtvr2ijT-ZYE0SW6Z9kqElKn6ythvLiRZvdO73KHjlJZXn8GktoAmJjvdAHt3Ru-E5JBzwYGmfMeRx9GHwMYnNr1QqXcEvCCOcNXXSmzNoAwKT_jBYTWa06Jj9Zgyi96uU8kqmGrqVIrXRJ-s2ZSEzWkW5TM")'}}></div>
<button className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 shadow-lg">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
<p className="font-bold truncate">City Lights</p>
<p className="text-sm text-gray-400">2021 · Album</p>
</div>
<div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors group cursor-pointer">
<div className="relative">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md mb-4" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmQFW-7nt9R1sEkOcguw4ujJ4xuOea9de_T0EiZg4zZr_B8Et1NNVPOEaHZUhkf5VqklnXPczOSc1XQV0RplZbPVhL8sMxwNXmqTVxhwsj1vdZxUZK35U4_WJZh1qv1riKgSlKSyRYG21zI05RpJUvqbWOMKjiBHgNdVNuiCe3s4HsdNw7oOMn-xFzZI54WdctMuWHcdMB6dD6PCSHCAAhsdIxJsMxJiw5oynjcR3T9_tjiwjGa3J4LZW0TDl-Q6of5vQFnRwKmc0")'}}></div>
<button className="absolute bottom-2 right-2 bg-[var(--primary-color)] p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 shadow-lg">
<span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
<p className="font-bold truncate">Echoes of the Past</p>
<p className="text-sm text-gray-400">2019 · Album</p>
</div>
</div>
</section>
</div>
</main>
</div>

</div>
  )
}

export default ArtistProfile;