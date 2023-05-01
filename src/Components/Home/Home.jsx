import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import 'animate.css';
import MediaItem from '../MediaItem/MediaItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Header from '../Header/Header';

export default function Home() {
const [movies, setmovies] = useState(null);
const [tv, settv] = useState(null);
const [People, setPeople] = useState(null);
async function getTrending(mediaType,callback) {
  try {
     const {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=43e917f519f5c6fdc2bc7f11c46168da`)
  callback(data.results)
  console.log(data.results);
  } catch (error) {
    console.log(error);
  }
 
 
} useEffect(() => {
    getTrending('movie',setmovies)
    getTrending('tv',settv)
    getTrending('person',setPeople)
    return () => {
      
    };
  }, []);
  return (
    <>
<Header/>

    <div className="container">
    <div className="row py-3 ">
      <div className="col-md-4 align-items-center ">
        <div className="brdr w-25 mb-3 "></div>
        <h2 className='h3 animate__animated animate__fadeInDown'>Trending <br /> Movies <br />to watch ,now</h2>
<p className='text-muted'>most watched movies this week</p>
<div className="brdr w-75 mt-3"></div>
      </div>
     {movies?movies.map((item,index)=><MediaItem key={index} item={item}/>):<LoadingSpinner/> }
   
  
    </div>
    <div className="row py-3 ">
      <div className="col-md-4 align-items-center ">
        <div className="brdr w-25 mb-3 "></div>
        <h2 className='h3 animate__animated animate__fadeInDown'>Trending <br /> TV shows <br />to watch ,now</h2>
<p className='text-muted'>most watched tv shows this week</p>
<div className="brdr w-75 mt-3"></div>
      </div>
     {tv?tv.map((item,index)=><MediaItem key={index} item={item}/>):<LoadingSpinner/> }
   
  
    </div>
    <div className="row py-3 ">
      <div className="col-md-4 align-items-center ">
        <div className="brdr w-25 mb-3 "></div>
        <h2 className='h3 animate__animated animate__fadeInDown'>Trending <br /> People ,now</h2>
<p className='text-muted'>most watched people this week</p>
<div className="brdr w-75 mt-3"></div>
      </div>
     {People?People.map((item,index)=><MediaItem key={index} item={item}/>):<LoadingSpinner/> }
   
  
    </div>
    </div>
    </>
    )
}
