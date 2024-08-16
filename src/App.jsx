import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddMusic from './pages/AddMusic';
import AddMusicAlbum from './pages/AddMusicAlbum';
import ListMusic from './pages/ListMusic';
import ListMusicAlbum from './pages/ListMusicAlbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


export const url = process.env.REACT_APP_API_URL;


function App() {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <Sidebar />
      <div className=' flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <Navbar />
        <div className=' pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-music' element={<AddMusic />} />
            <Route path='/add-album' element={<AddMusicAlbum />} />
            <Route path='/list-music' element={<ListMusic />} />
            <Route path='/list-album' element={<ListMusicAlbum/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
