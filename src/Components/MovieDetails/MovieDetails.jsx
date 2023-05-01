import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function MovieDetails() {
  let { id, media_type } = useParams()
  const [Details, setDetails] = useState({});
  async function getTrending(id, media_type) {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=43e917f519f5c6fdc2bc7f11c46168da&language=en-US`)
      setDetails(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }


  } useEffect(() => {
    getTrending(id, media_type)

    return () => {

    };
  }, []);
  return (
    <>
      <div className="container pt-5 "><h3 className='py-5 mt-5 animate__animated animate__fadeInDown '>Details</h3>
        {Details ? <>   <div className="row">
          <div className="col-md-3">
            {Details.poster_path ? <img src={'https://image.tmdb.org/t/p/w500' + Details.poster_path} className='w-100 animate__animated animate__fadeInLeft animate__delay-1s' alt="" /> : <img src={'https://image.tmdb.org/t/p/w500' + Details.profile_path} className='w-100 animate__animated animate__fadeInLeft animate__delay-1s' alt="" />}
          </div>
          <div className="col-md-9 pt-3 animate__animated animate__fadeInRight animate__delay-2s d-flex align-items-center">
            <div>
              <h2 className=''>{Details.title ? Details.title : Details.name}</h2>
              <h5 style={{ color: 'gray' }} >{Details.overview}{Details.biography}</h5>

              <div className='d-flex text-white'>Rating Average <div style={{ color: 'gold' }}>:   {Details.vote_average}</div></div>
            </div>
          </div>

        </div></> : <LoadingSpinner />}
      </div>
    </>
  )
}
