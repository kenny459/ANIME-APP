import React from 'react'

const MovieCard = ({image, title}) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img 
          src={image} 
          alt="anime-image" 
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg text-center leading-tight">{title}</h3>
      </div>
    </div>
  )
}

export default MovieCard