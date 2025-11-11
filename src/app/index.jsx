import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'

import MovieCard from '../components/MovieCard' 


import TabButtons from '../components/TabButtons'
import DisplayData from '../components/DisplayData'


const App = () => {
 
  const [activeTabIndex, setActiveTabIndex] = useState(0);  
   
  
   


  async function fetchData() {
          try { 
            const response = await fetch('https://api.jikan.moe/v4/top/anime');  
             if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
            const data = await response.json(); 
            console.log(data);   
             
            if (data && data.data) { 
              setAnimeData(data.data);  
              setLoading(false);
            }

          } catch (error) { 
            console.error('Error fetching data:', error); 
          } 
          
        
      }

  return (
    <div> 
      <p className='font-semibold text-[18px]  text-white mt-5 ml-5'> 
        Discover all things Anime
      </p> 
      <SearchBar/>  
       
       <div className='mt-5'> 
        <TabButtons activeTabIndex= {activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
       </div>

       <div> 
        {<DisplayData activeTabIndex={activeTabIndex}/>}
       </div>
    </div>
  )
}

export default App