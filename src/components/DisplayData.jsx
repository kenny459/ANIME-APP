import React from 'react'
import Anime from './Anime.jsx' 
import Manga  from './Manga.jsx' 

const DisplayData = ({activeTabIndex}) => { 
    const Data = [Anime, Manga] 
    const Selected = Data[activeTabIndex] 
    if (!Selected) return null
  return (
    <div> 
        <Selected/>
           
    
    </div>
  )
}

export default DisplayData