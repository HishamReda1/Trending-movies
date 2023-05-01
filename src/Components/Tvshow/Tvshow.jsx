import React, { useEffect } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import  { useState } from 'react'
import axios from 'axios';
export default function Tvshow() {
    const [tv, settv] = useState(null);
    async function getTrending(mediaType,callback) {
    try {
      const {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=43e917f519f5c6fdc2bc7f11c46168da`)
   callback(data.results)
   console.log(data.results);
   } catch (error) {
     console.log(error);
   } }
   useEffect(() => {
    getTrending('tv',settv)
  
    return () => {
      
    };
  }, []);
    return (
        <>
        <div className="container pt-5">
         <div className="row py-3 ">
            <div className="col-md-4 align-items-center ">
              <div className="brdr w-25 mb-3 "></div>
              <h2 className='h3 animate__animated animate__fadeInDown'>Trending <br /> TV shows <br />to watch ,now</h2>
      <p className='text-muted'>most watched tv shows this week</p>
      <div className="brdr w-75 mt-3"></div>
            </div>
           {tv?tv.map((item,index)=><MediaItem key={index} item={item}/>):<LoadingSpinner/> }
        </div>
        </div>
        </>
    )
}
