import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import { NavLink } from 'react-router-dom'
import MovieCard from '../../components/moviecard'

const App = () => {
  const [animeData, setAnimeData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
          try { 
            const response = await fetch('https://api.jikan.moe/v4/anime');  
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
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div> 
      <p className='font-semibold text-[18px]  text-white mt-5 ml-5'> 
        Discover all things Anime
      </p> 
      <SearchBar/>  
       
       <nav >  
        <ul className='flex gap-5 mt-5 mx-5 text-white font-medium text-[16px] justify-between'>
        <NavLink to='/' > 
          Discover
        </NavLink > 
          
         <NavLink to='/series'  > 
          Tv Series
        </NavLink > 
         
        <NavLink to='/movies' > 
           Movies
        </NavLink> 
        </ul>
       </nav>
        
        <div className=' mt-10 ml-5 grid grid-cols-3 gap-5'> 
          { loading ? ( 
            <p className='text-white'>Loading...</p>
          ) : 
           (
          animeData && animeData.map((anime) => (  
          
          <div>
           <MovieCard key={anime.mal_id} image={anime.images.jpg.image_url} title={anime.title} /> 
            </div>
           
           )
          )) 
          } 
        </div>
       
    </div>
  )
}

export default App