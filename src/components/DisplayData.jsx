import React from 'react'
import Anime from './Anime.jsx' 
import Manga  from './Manga.jsx' 
import TopAnime from './TopAnime.jsx'
const DisplayData = ({activeTabIndex}) => { 
    const Data = [Anime, Manga, TopAnime] 
    const Selected = Data[activeTabIndex] 
    if (!Selected) return null
  return (
    <div> 
        <Selected/>
           
    
    </div>
  )
}

export default DisplayData