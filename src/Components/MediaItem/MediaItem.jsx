import React from 'react';
import { Link } from 'react-router-dom';

const MediaItem = ({item}) => {
    return (
        <>
            <div className="col-md-2"> 
            <Link className='text-decoration-none' to={`/moviedetails/${item.id}/${item.media_type}`}>
            <div className='position-relative'>
                {item.poster_path? <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path } className='w-100' alt="" />: <img src={'https://image.tmdb.org/t/p/w500'+item.profile_path } className='w-100' alt="" />}
             <h3 className='h6'>{item.title?item.title:item.name}</h3>   
             {item.vote_average? <div className="vote top-0 end-0 position-absolute mx-2 p-1 text-white">{item.vote_average.toFixed(1)}</div>:''}
            
            </div></Link>
            
            </div>
        </>
    );
}

export default MediaItem;
