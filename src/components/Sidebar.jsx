import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' bg-[#003A10] min-h-screen pl-[4vw]'>

        <img src={assets.ABG} className=' w-14 h-14 rounded-full mt-5 w-[max(10vw, 100px)] mr-5 hidden sm:block' alt="" />
        <img src={assets.ABG} className=' w-10 h-10 rounded-full mt-5 w-[max(5vw, 40px)] mr-5 sm:hidden block' alt="" />
          <div className=' flex flex-col gap-5 mt-10'>

            <NavLink to='/add-music'className=' flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                <img src={assets.add_song} className=' w-5' alt="" />
                <p className=' hidden sm:block'>Add Song</p>
            </NavLink>
            
            <NavLink to='/list-music' className=' flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                <img src={assets.list_songs} className=' w-5' alt="" />
                <p className=' hidden sm:block'>List Song</p>
            </NavLink>

            <NavLink to='/add-album' className=' flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                <img src={assets.add_album} className=' w-5' alt="" />
                <p className=' hidden sm:block'>Add Album</p>
            </NavLink>

            <NavLink to='/list-album' className=' flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                <img src={assets.album_icon} className=' w-5' alt="" />
                <p className=' hidden sm:block'>List Album</p>
            </NavLink>

          </div>
    </div>
  )
}

export default Sidebar
