import React from 'react'

const Playlist = () => {
  return (
  <div className="bg-[#121212]">
<div className="relative flex h-auto min-h-screen w-full flex-col bg-[#121212] text-white dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
>
<div className="flex h-full grow">
<aside className="flex w-80 flex-col gap-4 border-r border-[#262626] p-4">
<div className="flex items-center gap-4 text-white px-2">
<div className="size-6 text-[#7f13ec]">
<svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
</svg>
</div>
<h2 className="text-white text-xl font-bold">
  <a href="/" className="hover:text-white/80 transition-colors">SoundMix</a>
</h2>

</div>
<nav className="flex flex-col gap-6 mt-4">
<div className="flex flex-col gap-2">
<h3 className="text-sm font-medium text-gray-400 px-2 uppercase tracking-wider">Library</h3>
<a className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] transition-colors" href="#">
<span className="material-symbols-outlined text-gray-400">playlist_play</span>
<span>Playlists</span>
</a>
<a className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] transition-colors" href="#">
<span className="material-symbols-outlined text-gray-400">mic_external_on</span>
<a href="/artistprofile" className="hover:text-white/80 transition-colors">
  <span>Artists</span>
</a>

</a>
<a className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] transition-colors" href="#">
<span className="material-symbols-outlined text-gray-400">album</span>
<span>Albums</span>
</a>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-sm font-medium text-gray-400 px-2 uppercase tracking-wider">Discover</h3>
<a className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] transition-colors" href="#">
<span className="material-symbols-outlined text-gray-400">explore</span>
<span>Browse</span>
</a>
<a className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] transition-colors" href="#">
<span className="material-symbols-outlined text-gray-400">podcasts</span>
<span>Podcasts</span>
</a>
</div>
</nav>
<div className="mt-auto flex flex-col gap-2">
<div className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] cursor-pointer transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw2EO_Gl0yM0AQk4oF9BXVGqM8PlIvhGXh2H_pffe6K3ZGMV8owdmQVrO6Lk1rd-jeN6aoUou86SrUf_Pkagl4StdqfE18eIofWldEiu6VPa5YykGEX5hN13lQUpjzWAPuFBaSWMvn2TdTszbE3zKJTCv3d8o4Hwg2yEE1nAbTis2hAJZEU7DpvD5DAoCPRufCuWbAhO_9oKNOyqwwcrMC4FljoRUJ7xrAevaMdcq509siAtIN9P0Cw7JYlULd4ZCrojLas_JjXts")'}}></div>
<div className="flex flex-col">
<p className="text-white font-medium line-clamp-1">Liked Songs</p>
<p className="text-gray-400 text-sm line-clamp-1">Playlist • 219 songs</p>
</div>
</div>
<div className="flex items-center gap-4 rounded-md p-2 hover:bg-[#1a1a1a] cursor-pointer transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAS_7A0NDUpXD-kYoUwADjvA0eQg0tWOtIut5wjuPH1C5t-dIaJ7VORYEpFgeWgMDwnHXCrKpz6DOEIG_O-37TTUFbLikM2lkTX5JRv7h77kEdM6veKn17juOfNpLW_MxykbN6LTfapHHNBhIEgzCHnNhC3SSl73pNkRbzVNL5cmfrGbxKe_ZjoIgXyy-eBhmKdtDjBOeJK2JazZkK-JFgUbP-UJSSq-EkA-s-BoKPg1VrhEOizwi8BTQRKs0DK3GoDlrr9Sm_wut4")'}}></div>
<div className="flex flex-col">
<p className="text-white font-medium line-clamp-1">Viral Hits</p>
<p className="text-gray-400 text-sm line-clamp-1">Playlist • SoundMix</p>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#262626] px-10 py-3">
<label className="relative flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-[#7f13ec] border-none bg-[#1a1a1a] h-10 placeholder:text-gray-400 pl-10 pr-4 text-base" placeholder="Search songs, artists, albums" value=""/>
</label>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCllnlg2ju0fz0AkMpSbMb5n-iRPG78cfOd6HphlNhLujewnWaOeM9lgxxLYdkA1pb7eGY7EYAGXOxiC7N0f9OrlwqcAz7p8wGbghAlgSsviQyPz9CXjhxgTCGsavPwM29rHmKu8eQVNxtduZsZA2JeUtVUsv92r2_WGtY4bgSZ8MQbjRquQEXouQ6jkNr2ItXJurl55tIspgedN1kI4NkaorwHvJyD1CHTUvXWIC2RWOWxrPz9nJnBLeSz1eYjYICQtGdx93x1Sjk")'}}></div>
</div>
</header>
<div className="flex-1 overflow-y-auto">
<div className="p-8 @container">
<div className="flex flex-col gap-8 @[520px]:flex-row @[520px]:items-end">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg shadow-2xl min-h-48 w-48" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXUWFSFu4T8Aq_hXRWVOqW-oQazt9tqgWdXPdlOv1LRhiVWU0ViGvgxePrHoYKTFfC5siTlqamX08FdlwBkp8YCOV8Jyxf-lxo3eXzPhayo7mvwK2O4qOtJqzum0MawBB0Oaf8KBpUwvl7qqfeOakm7EUQy3hOFPu1z4XZbvZss5Z21v_nyNF5nxKshpkNcpCfuWFjMsfRbxvKLELFsM8uu-SX129i-cN035pK5OznJpio03PchXgQWmYYFl3MUsqTe2h-czzew18")'}}></div>
<div className="flex flex-col gap-2">
<p className="text-sm text-gray-300">Album</p>
<h1 className="text-5xl font-extrabold tracking-tight">The Sound of Silence</h1>
<div className="flex items-center gap-2 text-gray-300">
<span>Simon &amp; Garfunkel</span>
<span className="text-gray-500">•</span>
<span>1964</span>
<span className="text-gray-500">•</span>
<span>12 songs, 35 min</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-6 px-8 py-4">
<button className="flex items-center justify-center rounded-full h-14 w-14 bg-[#7f13ec] text-white shadow-lg hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-4xl">play_arrow</span>
</button>
<button className="text-gray-400 hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">favorite_border</span>
</button>
<button className="text-gray-400 hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">shuffle</span>
</button>
<button className="text-gray-400 hover:text-white transition-colors">
<span className="material-symbols-outlined text-3xl">more_horiz</span>
</button>
</div>
<div className="px-8 py-4">
<div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2 text-gray-400 border-b border-[#262626] pb-2 mb-4 font-medium sticky top-0 bg-[#121212] py-2">
<div className="text-right">#</div>
<div>Title</div>
<div className="justify-self-end mr-4">
<span className="material-symbols-outlined">schedule</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">1</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">The Sound of Silence</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">3:05</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">2</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Leaves That Are Green</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:23</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">3</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Blessed</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:21</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">4</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Kathy's Song</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">3:20</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">5</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Somewhere They Can't Find Me</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:37</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">6</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Anji</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:17</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">7</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">Richard Cory</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:55</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">8</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">A Most Peculiar Man</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:33</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">9</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<p className="text-white font-medium">April Come She Will</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">1:51</div>
</div>
<div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 p-2 rounded-md hover:bg-[#1a1a1a] group">
<div className="text-gray-400 group-hover:text-white transition-colors text-right">10</div>
<div className="flex items-center gap-4">
<div classAName="flex flex-col">
<p className="text-white font-medium">I Am a Rock</p>
<p className="text-gray-400 text-sm">Simon &amp; Garfunkel</p>
</div>
</div>
<div className="text-gray-400 group-hover:text-white transition-colors">2:50</div>
</div>
</div>
</div>
</div>
</main>
</div>
<footer className="sticky bottom-0 z-10 flex items-center justify-between gap-4 border-t border-[#262626] bg-[#181818] px-4 py-2">
<div className="flex items-center gap-4 w-1/4">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjfFrMfRvVI0TMaTbtmm1YMUeB_ZkNp7p4jr0mBGUXuQsULQY83Cu4aWWPTK-gHj4avrJHDJpVRCFJDXXHHcP4XHVGGfsRnZnQ-C1zkcNAszwW5491yFSVwwEIzrY5xT_Z15XxuIVTzvYaIRSai6BYZrWihBZFG_mu11rqS1Ou109mw_S13HfP1fNUr87AevFuZr_T6CecbmfaoppooWEVIlY2Yi3D0DRwRbBS4bbmH8_ldxPBImuekT2DVA5hgPgNWCZ0r5BFzy8")'}}></div>
<div>
<p className="font-semibold text-white">The Sound of Silence</p>
<p className="text-sm text-gray-400">Simon &amp; Garfunkel</p>
</div>
<span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer">favorite_border</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
<div className="flex items-center gap-4 text-gray-300">
<button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">shuffle</span></button>
<button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-3xl">skip_previous</span></button>
<button className="flex items-center justify-center size-10 rounded-full bg-white text-black hover:scale-105 transition-transform"><span className="material-symbols-outlined text-3xl">play_arrow</span></button>
<button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-3xl">skip_next</span></button>
<button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">repeat</span></button>
</div>
<div className="flex items-center gap-2 w-full">
<span className="text-xs text-gray-400">1:17</span>
<div className="h-1 flex-1 rounded-full bg-gray-600">
<div className="h-1 w-1/2 rounded-full bg-white"></div>
</div>
<span className="text-xs text-gray-400">3:05</span>
</div>
</div>
<div className="flex items-center gap-2 w-1/4 justify-end">
<span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer">lyrics</span>
<span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer">queue_music</span>
<span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer">volume_up</span>
<div className="h-1 w-24 rounded-full bg-gray-600"><div className="h-1 w-3/4 rounded-full bg-white"></div></div>
</div>
</footer>
</div>

</div>
  )
}

export default Playlist
