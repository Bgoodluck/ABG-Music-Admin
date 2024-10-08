import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ListMusic() {
    const [data, setData] = useState([]);

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/song/list`);

            if (response.data.success) {
                setData(response.data.songs);
            }
        } catch (error) {
            toast.error("Error Occured");
        }
    };

    const removeSong = async (id) =>{

        try {
                    
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/song/remove`, {id});


          if (response.data.success) {
               toast.success(response.data.message);
               await fetchSongs();
          }

        } catch (error) {
            toast.error("Error Occured")
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
            <p>All Songs List</p>
            <br />
            <div>
                <div className='hidden sm:grid grid-cols-[0.5fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Artist</b>
                    <b>Album</b>
                    <b>Duration</b>
                    <b>Action</b>
                </div>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className='grid grid-cols-[0.5fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'
                    >
                        <img className='w-12' src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.artist}</p>
                        <p>{item.album}</p>
                        <p>{item.duration}</p>
                        <p onClick={()=> removeSong(item._id)} className=' cursor-pointer'>x</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListMusic;
