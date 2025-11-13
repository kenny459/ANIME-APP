import React, {useState, useEffect} from 'react' 
import MovieCard from './MovieCard'

const TopAnime = () => {
 const [topAnimeData, setTopAnimeData] = useState([])
 const [loading, setLoading] = useState(true)  

    async function  fetchTopAnime(){  
      try { 
        const response = await fetch('https://api.jikan.moe/v4/recommendations/anime'); 
        if (!response.ok){ 
          throw new Error (`HTTP error! status: ${response.status}`);
        } 
        const data = await response.json(); 
        console.log(data) 
         
               
            if (data && data.data) { 
              setTopAnimeData(data.data);  
              setLoading(false);
            }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }   
    
     useEffect(() => {
    fetchTopAnime();
  }, []);

  return (  
    <div className=' mt-10 ml-5 grid grid-cols-3 gap-5'>
    {  
      loading ? ( 
        <p className = 'text-white'>Loading...</p>
      ): ( 
         topAnimeData && topAnimeData.map((topAnime) => (  
          
          <div>
           <MovieCard key={topAnime.mal_id}  title={topAnime.title} /> 
            </div>
           
           )
          )) 
      

    }
    </div>
  )
}

export default TopAnime