import React from 'react'

const SearchResult = () => {
  return (
   <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#141118] dark group/design-root overflow-x-hidden"style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
>
<div className="layout-container flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#302839] px-10 py-4">
<div className="flex items-center gap-10">
<div className ="flex items-center gap-3 text-white">

<h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">TuneIn</h2>
</div>
<div className="flex items-center gap-8">
<nav className="flex items-center gap-8">
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Home</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/artistprofile">Artist Profile</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/playlist">Playlist</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/searchresult">Search Result</a>
</nav>
</div>
</div>
<div className="flex flex-1 items-center justify-end gap-6">
<label className="flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-full h-full bg-[#302839]">
<div className="text-[#ab9db9] flex items-center justify-center pl-4">
<span className="material-symbols-outlined !text-2xl"> search </span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#ab9db9] px-4 text-base font-normal leading-normal" placeholder="Search" value=""/>
</div>
</label>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwZVSVY-Z8JktbjjxKaRVeeihuVYDqpdewlvfj1BGYVtGMHfgI85zxI8zJ46YNH6RuideJYHmFw7obH6MMng7ELOqSbf4ynS6xVuYmIFJtQ-TNmtG0DQeQoDx60-UIUlL241W8xSL6p1WnCDWY6A5p8sC191TR_cDRBy8JUnCFWqpnofxfHCP5QKmaR70cFmfLXPRiOznmUNWlVjeLMqyoA4Ayh8VbHNAxGW7yl2CXkKQRmrdZcPsPeKgW7LR50_dR0LGeZK6Kp04")'}}></div>
</div>
</header>
<div className="px-40 flex flex-1 justify-center py-8">
<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
<div className="px-4 pb-6">
<label className="flex flex-col min-w-40 h-12 w-full">
<div className="flex w-full flex-1 items-stretch rounded-full h-full bg-[#302839]">
<div className="text-[#ab9db9] flex items-center justify-center pl-4">
<span className="material-symbols-outlined !text-2xl"> search </span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#ab9db9] px-4 text-base font-normal leading-normal" value="Taylor Swift"/>
<div className="flex items-center justify-center pr-4">
<button className="flex cursor-pointer items-center justify-center rounded-full text-[#ab9db9] hover:text-white transition-colors">
<span class="material-symbols-outlined !text-2xl"> close </span>
</button>
</div>
</div>
</label>
</div>
<div className="pb-4">
<div className="flex border-b border-[#302839] px-4 gap-2">
<a className="flex flex-col items-center justify-center border-b-2 border-b-[var(--primary-color)] text-white px-4 pb-3 pt-2" href="#">
<p className="text-sm font-semibold leading-normal">Top</p>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-white/60 hover:text-white hover:border-b-white/30 transition-colors px-4 pb-3 pt-2" href="#">
<p className="text-sm font-semibold leading-normal">Songs</p>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-white/60 hover:text-white hover:border-b-white/30 transition-colors px-4 pb-3 pt-2" href="#">
<p className="text-sm font-semibold leading-normal">Artists</p>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-white/60 hover:text-white hover:border-b-white/30 transition-colors px-4 pb-3 pt-2" href="#">
<p className="text-sm font-semibold leading-normal">Albums</p>
</a>
<a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-white/60 hover:text-white hover:border-b-white/30 transition-colors px-4 pb-3 pt-2" href="#">
<p className="text-sm font-semibold leading-normal">Playlists</p>
</a>
</div>
</div>
<h2 className="text-white text-2xl font-bold leading-tight tracking-tighter px-4 pb-4 pt-6">Top Results</h2>
<div className="flex flex-col gap-2">
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqOLYmXASDp_Biv8UDf9yvxJLtsXqXQFjv3H87LR-m8dv8DZCkNW5WkHCQtHF6Z_hEr5T4dW8IUsQpbYkwH843ghy2qzAvSHCaLxEonmrI68k6I6MV3h7sPDk_aKjBUZZRlauIgfe2T8QFFN3GBaZJEzz1Hl3CofLL9YWijULRyt_jvCCA2DBwgKYcL8K2h1SBlMd82NNXtwmA4ZEyzuRC_n5Zt2JwMhbP1g-QZY8MF9eli9qASzF57X9kbIwBjrMCB3DMgEd-iFA")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Taylor Swift</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Artist</p>
</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk5GNhoZwwHHHRd_QHFieAIEFB3zbQVJqK2N1YvoofgWRS0B32qmUuFCncK4g_sJghzEAlvmlYbbpA2g3KSGVheWuEAypuBVLfHd5ytcV19BBjV_wfkfwvVPMwGT-u7VDbgWc9qVyoKEc7joxoZJvZrtGdUq2A7GtQ3h4XIAEQz9r5pjndC5ZakNxfI2GBUh23tkroEYr_D1UlQkUbC7RvCqkGb-BKULJJTS7R1-ep9qpi3xWj3GWsI8slc1HtMwUA7YZ1rFn-20g")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Cruel Summer</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Song • Taylor Swift</p>
</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtXSgMr8nffKateVJNBlhg3aPT32dlrW-w8LDtinYJksdxVT-agQ9sUlz7_VBCPFT6yvHlIJZt_HPLmAgmqDdxQjzDiuLCchyO8jtcn1tzdwH--Rhf8oRP4YbqXKRJga89AUYDsb74wktdj8g6_pIucTa_Qp3kChGV67_RCbM_LO50mdGESkfwZM1zUSUJlrIz5J5DfWyl5z6CMCUQTUtD3-pqati1eQxTHmnXEMiZoYftKkx6ewQT1h8wb_ll5hreCkVVefilUYY")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Lover</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Album • Taylor Swift</p>
</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3H7xx7lz8fv-pK6n1PzDt4FMUrwakC83yqM4pPjnbRQQT1c-P00_bWiqUgpunF-eWza3S-f_dsAi5yatVpI8fvNdM63IejjzeXImP4IUhlIVeXTThz7JvDk2PLj05xzbnu9RgX3kSmZSIU2CVeVwtr0J2zt3wGDpPdbd7I3hcrOTXOdFKoizlb5EO4UB08n2UkowjUBYBk0E5hce3t65jWVkC98TqMxMrhuu54b0VrBBNdYr3usJWafZ2I3XGbbeg3dug5_aeL-M")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">This Is Taylor Swift</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Playlist • TuneIn</p>
</div>
</div>
</div>
<h2 className="text-white text-2xl font-bold leading-tight tracking-tighter px-4 pb-4 pt-8">Songs</h2>
<div className="flex flex-col gap-2">
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbNcr5-qv0Ql9SB2DCWd_jvySCO1loMvLEzwJ4HQ6pUpzkiz2D5BvEam2DkRVFOkqta41IC_72Axe6qK2kPNfP_yATignfqjJKsfyDtat1hXAmQtTs9zGbY1VBhi0NKhU9p73V8jJxHO8ukgkoi0wl2dB6yfZZQYQ1so9IctLHhU1y7km9jraV9iD6m6jJXRgPsVGjaQu9S6LNO17ioBee7THxDuqxinmsog_4Dqkqq52DxwUBzNw3z19TL7XxRuDgEI8USrjCYpo")'}}></div>
<div className="flex flex-col justify-center flex-1 truncate">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Cruel Summer</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-1">Taylor Swift</p>
</div>
<div className="ml-auto text-white/60 text-sm font-normal leading-normal">3:02</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCChhMvbir6r1xDqGHl7jBsGMJhNaH0wroylqFgT9HP9LJ3V4b0IZDID4Hnkl_36M0L6-Bjg3k24x01iwKT5Gz8sIBEcD1lkWTxMwMAjOOm0dHOt0NOEFOqaItR5YVrubZJ6oTTBezafOKN2JpuNJbAqhrz2vD9zd1DvXgQw7XDyrXicL9hKSvOOFJhxS_FPoM9lA1QaEopFRaUiqxf5xro3B1sIItvg5yIRC7py7GtwYcypcuOY6_t7hhvhGtI8ziFTbf0zNsplpU")'}}></div>
<div className="flex flex-col justify-center flex-1 truncate">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Blank Space</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-1">Taylor Swift</p>
</div>
<div className="ml-auto text-white/60 text-sm font-normal leading-normal">3:51</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq5bKfqlWAUd2zyd99r4o5nrv54GEb2tgzigptaLSsR4YO5Rcioep0zRWEqk34qefmwdsplRfvgkE0UGEDtFDK2buYoGLpIeetst3JMNYQEaeqRUtwqswnfettu9mKbORGggasl-hPH9Vznq9lFRFvSYFhJxWHI0Ifw6bXyU3OE7SbD4kNj9KnrNXMvVG5o5I-cQI1ztBBujKrkBUeVZ9AI8-y6lYzZTbDkTvY8nTABaQKovTwX-zS9fulxKS7msKxbbkZVMunLOo")'}}></div>
<div className="flex flex-col justify-center flex-1 truncate">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Shake It Off</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-1">Taylor Swift</p>
</div>
<div className="ml-auto text-white/60 text-sm font-normal leading-normal">3:39</div>
</div>
</div>
<h2 className="text-white text-2xl font-bold leading-tight tracking-tighter px-4 pb-4 pt-8">Artists</h2>
<div className="flex flex-col gap-2">
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfACdpSLRemYdHFGs6RoHIgjCuMHe5ob1V7qeh2k_anxvnXXrzoLIUyoztZlGjR-Y69inCV66bUR8ABPaBRKjbJdPTbnDbQHKB15fjndfvB8Rwk0rSXqWImdAcvtBWTO364tTtze9xc7RPU06lvAMsUr1eJLWqvSifpF3RGNqeqaCwCFV__F4UsMpPPCWZNTj-4e3V3uNrbQrf3WOWKApxBWauxoC1uoFEeZVkznqpVfih-PX9GgC7pa5MbQUl5BUSzKJ8lzEZuNQ")'}}></div>
<p className="text-white text-base font-medium leading-normal flex-1 truncate">Taylor Swift</p>
</div>
</div>
<h2 className="text-white text-2xl font-bold leading-tight tracking-tighter px-4 pb-4 pt-8">Albums</h2>
<div className="flex flex-col gap-2">
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDga9OrSpFOgHAMHGhnGzHqKRhv5xWL2RlKXGKLo-CsWdbfqAU6slu2MublL4cwKVX--mTjipkh73WCeyTEOvhusqzCMf4uwutmSLEpVeL3tWqEsSEO6hs3bPTUC7S-hoyKIZpNxSlCfMP5k9GnOOAJAyVP8VNcSl24ITD_2VDNSLXHFNFdN3yB7fgjimY0nlR8qnY-jZOawB_hqjQQI-Ktv9C8ZPn5Xfe-c9oAfKC7wJ3DhFaNBPMU-A1Mqa7M8Kob2MGPMlzBiHw")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Lover</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Taylor Swift • 2019</p>
</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCiLbKVI7bXiJHboCSLDPS-7cL2mTiht_f3e70b5DYAQGDh6Shll3DlpqbzTpu9RXXCcJsNkSCn3Z4husm6XlXqGtLqyYHufaI6zDH10N4AFlsKvezHGnrULzjQ_sBn5EQ0Jgk0oskxWthBEkYvLza5M190hZRXke38Fuk1nRxQiK1XuNSYxnNj-In5cR4_7zXxvtPfULo2Sl4asM4hvAyq_Rc612-SH4MGsLBp4JnfQuMRNZeDdkGrDkgIf9JaxSzD830YAIGoGo")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">1989</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Taylor Swift • 2014</p>
</div>
</div>
<div className="group flex cursor-pointer items-center gap-4 rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-14" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkTYMv7bdaWwtvXk86q3uqZcP599SlnLdqP3cGxDA_40NUIektZQbUvUTNIAKquUEzfYzR5FSCXJtSLdb5ZlpFYR-Fq0Nev3sE5aFoNtYRMEnnaVDKQxss8pb9HDwKkeOS8KSCCADkQmVAtjjNbaVkAifxOCC7QhRhSIGxD-gHQorwLt76G9_nekhVB9Vhg70q1GQUhyiJIkXcq1v6B5MgcNKDl3qQLvfOm5xbGjNToT9Naf4ot0eF9rIRj8fVe7bTCwduhoIVSMY")'}}></div>
<div className="flex flex-col justify-center">
<p className="text-white text-base font-medium leading-normal line-clamp-1">Red</p>
<p className="text-white/60 text-sm font-normal leading-normal line-clamp-2">Taylor Swift • 2012</p>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
  )
}

export default SearchResult;