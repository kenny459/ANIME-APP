import React from 'react'

const MovieCard = ({image, title}) => {
  return (
    <div> 
        <img src={image} alt="anime-image" className='w-full h-auto rounded-lg'/> 
         <h3 className='text-white font-semibold mt-2 text-[16px]'>{title}</h3> 
    </div>
  )
}

export default MovieCard