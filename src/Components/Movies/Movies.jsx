import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function Movies() {
  const [movies, setmovies] = useState(null);

async function getTrending(page) {
  try {
     const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=43e917f519f5c6fdc2bc7f11c46168da&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  setmovies(data.results)
  console.log(data.results);
  } catch (error) {
    console.log(error);
  }
 
 
} useEffect(() => {
    getTrending('movie',setmovies)
 
    return () => {
      
    };
  }, []);
  return <>
  
  <div className="container pt-5">
    <div className="row py-3 ">
      <div className="col-md-4 align-items-center ">
        <div className="brdr w-25 mb-3 "></div>
        <h2 className='h3 animate__animated animate__fadeInDown'>Trending <br /> Movies <br />to watch ,now</h2>
<p className='text-muted'>most watched movies this week</p>
<div className="brdr w-75 mt-3"></div>
      </div>
     {movies?movies.map((item,index)=><MediaItem key={index} item={item}/>):<LoadingSpinner/> }
   
  
    </div>
   
   
   
  
    </div>
    
  </>
   
 
}
