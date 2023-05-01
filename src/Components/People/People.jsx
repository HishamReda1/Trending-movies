
import React, { useEffect } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import  { useState } from 'react'
import axios from 'axios';
import { Helmet } from 'react-helmet';
export default function People() {

  const [People, setPeople] = useState(null);
    async function getTrending(mediaType,callback) {
    try {
      const {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=43e917f519f5c6fdc2bc7f11c46168da`)
   callback(data.results)
   console.log(data.results);
   } catch (error) {
     console.log(error);
   } }
   useEffect(() => {
    getTrending('person',setPeople)
 
    return () => {
      
    };
  }, []);
  return <>
  <Helmet> People</Helmet>
   <div className="container pt-5">
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
   
  
}
