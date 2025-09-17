
import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#121212] font-['Spline_Sans']">
<div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<div className="flex h-full grow flex-col">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-white/10 px-10 py-4">
<div className="flex items-center gap-10">
<div className="flex items-center gap-3 text-white">

<h1 className="text-white text-xl font-bold">TuneFlow</h1>
</div>
<nav className="flex items-center gap-8">
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="#">Home</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/artistprofile">Artist Profile</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/playlist">Playlist</a>
<a className="text-white/80 hover:text-white text-sm font-medium transition-colors" href="/searchresult">Search Result</a>
</nav>
</div>
<div className="flex flex-1 items-center justify-end gap-4">
<label className="relative flex w-64 items-center">
<span className="material-symbols-outlined absolute left-3 text-white/50"> search </span>
<input className="form-input w-full rounded-full border-none bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/50 focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="Search" type="search"/>
</label>
<button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
<span className="material-symbols-outlined text-xl"> language </span>
</button>
<div
  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCduHcKByrODZr4rq-6PWwstkWcVuwVLp38o7eXCJKevJNREZ14LN9xa-7Hiv0Pu7txcCRluT_RIsxNE7tBS0mVnRLR3j48HW6CdhGVO_qlffejGU-dZ9VWHU6fju2Ybu9jrBPysiqtPKlGCajqrS08RZ8Ur7rlzkIpRtgYpuDDz7pI1bW8aJapmxLxfT4OXMEXLW0eswn6xPgI-fT25EKywGE5Ys1TWEdN377Xu_s2F0MupkB-0D6_bMYHbSOVTiJr7TZHn5pfqF4")',
  }}
></div>

</div>
</header>
<main className="flex-1 px-10 py-8">
<div className="mx-auto max-w-7xl">
<section className="mb-12">
<h2 className="mb-6 text-3xl font-bold text-white">Good evening</h2>
<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div
  className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-AB7dD6si4pHghvzQvmKBcEOsxzlyGqfl35feqYp06k0tHldbS7q9FApal_vWjVBVOuYMS4gM8dq_N-_4mObAqbpuxTScGIpzmvjhCQfcnZDJmv6IbN5z3drV-dubb3pTu2j4EEwIHnB3ZfnfNgwYl4WNQscywspRSj64WSwLYMhG6syJfnk-kYuqCIOojoMuCcfbXCK1-gNTHVBhSAzQQUH95IdVocAAZDyxcqO21Cpj2sInvmc6cnAgZ0N0GsUN46GRKyNlpQY")',
  }}
></div>

<p className="flex-1 text-sm font-semibold text-white">Liked Songs</p>
</a>
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW9ftCu8AmKGs3LrnIeBdRf2s1QIKk5t1sxXqCVpiYwxTQebqv_xLBaYG_GnHcehXOrDcQMc7XPdG6H4-XmQr_V5ehTnfJqff4iy-53u8ImTJwwRB2w-b8AM1NjaQyX3R2eDmRk5eOYQnFVY_B_o51XirSsMTa2aO5EVnZbb_CvzCE_cyj1c-5PTHyaX8GZZKX9MBvuzlI2Wl8l58zDKx-MJkB3cv1tr78hHxCLCulg3BumKAsYwYyqzurXNTKdsutQpgBjMzMfXU")'}}></div>
<p className="flex-1 text-sm font-semibold text-white">Pop Mix</p>
</a>
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAR7fgJl50wJsaqmsxlNVqSbgK0mdZ5mYWtMJtg7ZE7fwHUutNSxDlXDkSGqoKKRz_WaUDW2Q6wF_tdQfhQjVRyfO_Xyhnv8E_V1UOxs_7svzkevoQWHCbTzQEKsDpOHyTc2QDUmpxdVrEPXBU3BoPrP_0KGO-mbwB322ggcsoBvyIcCRtTnKr5n1xU2jPgdNczQ6Eioqc2cPUbQ9Q5eyqWf3fWsrzaFj-ppbrjNotgjNME_UW_FQFDrR9X0mmkAyppowSqzcBGen0")'}}></div>
<p className="flex-1 text-sm font-semibold text-white">Chill Mix</p>
</a>
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-tBQ6xKnSaZ9iYzbCm-5uxQ9VgbiaKTeh3gh3xNy041gUQuKfn_T5oyRAHsT5YGA0B_UXynghot2ODtnW-BMrA4FJN1CzntpsO2PsV7vz70yF5qMi0UPg5cdDgrGccpNNOkMdnPkGwC7BwYg8mIr81FbBw6sobYDQ5MSuLyQEBgP_Yv9hXeM8K1hJ0kOCAZAIvXcy5XnDR9O8ggaXabzKizWRPPObS8YecgzN-188CHpwp2hlM8uSqoSOnLrVDqynfoTGvWnuRzQ");'}}></div>
<p className="flex-1 text-sm font-semibold text-white">Discover Weekly</p>
</a>
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE_jNK_DBCq7KhL-W3ohoyi5CQ0tsjDt1iNm7o-OXuCGyjFkTzbrdXk_IahM6013cAt3dLf8x9ymZakNdnzoHEuYkdKBwHr23yJSfFTvkuY8P_SKHxotrVOkz068iivL6xXCzG4lsGV-0mDLHu84snSOoItLVB5Vb905M57DFhNHTw4glERT_UJtvWqne4z1bgu4p3VfAa-MfkAVQyeC2E-xdzTl_DpYQGczwMWsVnnJS5AhgOIRAyd7VCSQINfTASXNgsz0YVWQo")'}}></div>
<p className="flex-1 text-sm font-semibold text-white">On Repeat</p>
</a>
<a className="group flex items-center gap-4 rounded-md bg-white/5 transition-colors hover:bg-white/10" href="#">
<div className="h-20 w-20 flex-shrink-0 rounded-l-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDepuEGK_x8sSUrvDM0nkAk6tzHAkF1K1eJrtDeSL6GZSM7hwiFSisaiUO5kfvk6iw-fU5d76Cez48cu5ZtzOHECwu9IvhjfInd-fH2AaIV531cdi0cEibUFr7ciGGemBaBV5oWJo81TdD6reOpEVrsz99e548Gzbpy3KPTQQEest065WCKfw6NdCiECDGJ9zeQnAXDhmsMbTvtl0pDZdCAPfY-XRIO-5fv_sBt-4BcAANRrhi9T31rziZBvBDmufwYbpiJIH5y4kA")'}}></div>
<p className="flex-1 text-sm font-semibold text-white">Top Songs 2023</p>
</a>
</div>
</section>
<section className="mb-12">
<h2 className="mb-4 text-2xl font-bold text-white">Recently played</h2>
<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcO0_NtD-G5FhQxapj1pNYCLTD3cQ_YjuegN2lJuXRiN8kihrZKafzFzgQSQbVzzvmEcgt4K2EO-_G_dJr-t7tpS4saIfzaz65s_ZrHLqdk7fmbcPmNtBen19bBPs1Xa4vahrr1RYWs-17oHibzTmPF1JE_FOUHi-u98tGjEr_jnzcJUDGXDJaORC4HiTSWEMvIGJNS6OjFZLKb9LqKY_tycjZBsjL9_p5s67jQcNjdvR-QpO3g0ZTK8Uu78GVdK8BEz5rklIWQxk")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">The Sound of Silence</h3>
<p className="text-sm text-white/70">Simon &amp; Garfunkel</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div class="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0Zugw8cBMbjXcjJPE11W8dkWrA_2ppbo6YI0Yx2iFw3YK0Xt3ROVgeBPgIQ26bHXICYMZiEIS-mAZ21cyd2uhvK7zPptb6qaTo7y3nVNPY0Rph115EurrhivoAQ3P1LqM5spLdwLE8FDWt59RtJWz1CfEtPXgveQ_ErfbWApOlrl4TfnGe4AtkgiEtLT3OegJXMkxUzWdBB9si8GpT4Gh_ox0XGjlOXzQipRh3Y4PFWwXqquRxw_j96UpXxV39zYan-z6xlfGbOU")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Acoustic Hits</h3>
<p className="text-sm text-white/70">Various Artists</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9WSZAetb0xOsvNCju4rtFCoYK7dM_Yni1XJBf7-Te80_-tWFoI6Wn5F6bGiAjQfXcY03TXvcBQY_KdgnqLMnVF21va3N2VGyo8KFACFkgC4w7npnyM4jxKMEX95F6aI0AeCZQLU_VwNhvBNhFQRg-313emTzjqBDABdi7hp9yKWOYDMfYJkq8fHkqpDzYufChFBJM9AvDBRPHkU6EXzHDU_4GhFRLJsUHuOIyPdPVPO2Yyrpg4-yGsZAqhltQzjRiyOEpdZtgf-Q")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Indie Pop</h3>
<p className="text-sm text-white/70">Indie Pop Collective</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhynWzDuodUGX29hI2Oc1UUA5hgYZ7JIz8WrCkW21ZWEFeRY2QRQIYzhHsjp_7vbwer8_hv7TpPimOF3lcFLB7lHYpppCqoOVIrgidb4huW0btNX4rL4bsJPE3cuUZzEiUzvUWq-mMCzvfefCBTtAmruQ-88xxh-iBWzBL1G8zkX0KpBKrQVIzyYQGMFjdWDcvmVsnqH215LemkN2L9S-oZEjO0AkjTaJ-mmMJmH7sC36TCs9gr0-3Zg6QmNazyaAniDaMGvFENwk")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Summer Vibes</h3>
<p className="text-sm text-white/70">Summer Vibes Curated</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdejFmbDnE18X5KJx3UPri7FGNK4-W4l96JP5tVcOQjGstVOCUevSmhSFT_b-E9rtCVfcTee7FFdPMvyUSTySGNkRik64qwRmQZ8fyUbpOBjijTUW2xR2hMhzt2x5Ad4YsNvZsPLVBZN-yv9sLZt5cWrYICaVSdi8oM4ury0AESkdkeSNbFCYCmz3o-Bt5WZgE4jbBePM-7Ig2QuEFORpWSHWW80Yn4GhEFjglRIVELYjkTGwkDjvNW3KDcBnR7XiDXRnjW7w2ZBQ")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Road Trip Playlist</h3>
<p className="text-sm text-white/70">Road Trip Tunes</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvzqAJQsu1mtDVn4L0GNZ3EpsbEIlBp-YNo54jAe3rpSruBHRrQDftN0Ma1BqByWE8MHyVm_t7wSKKC79KFIozSU_S1vPPLJNUWCUoPUrvIva60WQLdN42Il8ASXKsP-ozu1SEdW4WI_1g7r5EP6Vs-xXTAc5NUKpM3U5WitMTGt3ZGfLNLU44Y8jzupFHHSyBcl6rJ9Hqej3_-YuLKWvm-gFsET8FQb5phjx_bDLItDg3dAwh2KTkdnaldNHzQOVd2fKOa8DVeGs")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Late Night Jams</h3>
<p className="text-sm text-white/70">Late Night Jams</p>
</a>
</div>
</section>
<section className="mb-12">
<h2 className="mb-4 text-2xl font-bold text-white">Made For You</h2>
<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBK8aQVhmNIxJ44F-dCOPClKALqjFe00qNlGuZnGUFS7YXQA3ZJH4Bq4NUqJs_kF8KZuEnntZT2MO9jJSco6_zBG2L36xpfM1rer-wiPlKicbUOHjQOCAIt3xLGTJhfSC6fHEjDbakvG754XUPoQ64YROa0N4W4tkCY3eH6aaFpDjZvascyKzs30BYIDhRJBtZPyomRGHb_5ora2NfARyQIV34dcN8vhABrrScg2Z8iENHyP6If3P9VtaX5loOUmoKYcX_zyb2k7VY")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Daily Mix 1</h3>
<p className="text-sm text-white/70">Your daily dose of music</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbFKXHm_mTyqrKkScARfTt4i1_rRytSA-eSdcJaeQcL75L_Mv3Sv7WcxIKaergZAMnqUn_oiDCf6qPXdCeZuqOljsKfCf3RlfMAuSfN4N4ZSRxS6qztisjEYiUU7CUtzbVtOgEOy2Utd-7-vwKgOFtDZ4UTboTbIInz3HDTGU90f8X0LVXeRCfzM9qW2sztetWygw71W7fbdGjq3ppfcHGNIHtoXc316WRlsXCQD68sX0PLYJLd7IoMEkun25CQcoko1SWJH6wmNE")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Daily Mix 2</h3>
<p className="text-sm text-white/70">Your daily dose of music</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdeaCUQu_yVA3Rn2FXL-j6JJITx13yfa1GP4AFhVr9NSRdnLT2cjMW34rNZvzfAgBx8ZlbIYxAn8rfiwMzgMgKykhQIE8Swvz01xp5ny3ejf0-M1W_TgunbxLLu8s7e647FMqTIgbHXs2JW6eI7FmpJ0SqsYxCr7Jjem4qAEtBL3DkdmGUTt1Kh5dq7bTCtN9fcf8tlXNSITvQ3TNE6qL-aUvAhUiDcaioA3VvafoNDDJbpkMmS-JsyH1SYHBwal9hJOZ9i7JL3Fk")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Daily Mix 3</h3>
<p className="text-sm text-white/70">Your daily dose of music</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzccQF19iahsYfxWA2E4u4Yr0Wpe5tQ1HbRVvZRnqbwbb8tlz7VBfAl0J2K8Tt8jOdUS1Yc4jJ6qr86XC3usM-qkU6lW5XqELpbIDKEhNNcNWV1USkjrl89IERmE43aH6pTTeJL-TzO0y_ySie0qEx7IXGOGpmSHYnToSZgFAOBvV45nsxp17pI6B09WeiBTLJlFajpDrKl0bNwEUcAH_qHupor0p6uHV-yjBW-Gg034Id35lVIJfa-4m_QsuqOY4ZduZca1g5aXY")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Release Radar</h3>
<p className="text-sm text-white/70">New music from artists you follow</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCasLdGYScTqyw1HLU3TraDA8PbzSVPbgTOgEhUoizlYu20wtWpOJwXB56zBBzmeg-JiHZMTLpCTofTtYRq86x03A5putwHUW58Ns8VN1YhEeok1o2GiflDZn3uHfMSxbeZSYBiB1QB1fYi624p7cemgAKtQN6jn35VzAlczPktBZU1w96LpqskgEK7G067jdVkqjIm--n0fE5D8EynClfbPE43_1FTzucpuwzICkUZr2pG90JH-MfjlcBcNFwqQ6uP02d6nFE61KU")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Time Capsule</h3>
<p className="text-sm text-white/70">Songs you listened to years ago</p>
</a>
<a className="group rounded-md bg-white/5 p-4 transition-colors hover:bg-white/10" href="#">
<div className="relative mb-4">
<div className="aspect-square w-full rounded-md bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQAwvbbxS628cdlutp9oeR3U5vIEKtUEq05C37e12gFlqHdouYt2L1OoWreOtHDoXfS1now176IWicAIRsFRFrhpg91OXlv2at7QQLrx3p2nVcD7NUY4bNLawQ7NjHA4giq9SZWY5pq-tkNs3bd1_0IGTzRzkDCmrbRDYY7BxRnJ7wRKkleo0F3D0P1XUqkLHlPgg4IAfeagp6UCesEnVEbEhgvViSBJk_oL3l8iaJFZt1MBdrWhV1gF1df3PdQZ3e2hvFTjBAOs8")'}}></div>
<button className="absolute bottom-2 right-2 hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-lg transition-transform group-hover:flex active:scale-95">
<span className="material-symbols-outlined text-3xl"> play_arrow </span>
</button>
</div>
<h3 className="font-semibold text-white">Repeat Rewind</h3>
<p className="text-sm text-white/70">Songs you listened to recently</p>
</a>
</div>
</section>
</div>
</main>
</div>
</div>
</div>
  )
}
export default Home;

