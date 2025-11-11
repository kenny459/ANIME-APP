
import React, {useState, useEffect} from 'react' 
 
import MovieCard from './MovieCard' 


const Anime = () => {  
   const [animeData, setAnimeData] = useState([])
    const [loading, setLoading] = useState(true)  

    async function  fetchAnime(){  
      try { 
        const response = await fetch('https://api.jikan.moe/v4/top/anime'); 
        if (!response.ok){ 
          throw new Error (`HTTP error! status: ${response.status}`);
        } 
        const data = await response.json(); 
        console.log(data) 
         
               
            if (data && data.data) { 
              setAnimeData(data.data);  
              setLoading(false);
            }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }  
     
     useEffect(() => {
    fetchAnime();
  }, []);

  return (  
    <div className=' mt-10 ml-5 grid grid-cols-3 gap-5'>
    {  
      loading ? ( 
        <p className = 'text-white'>Loading...</p>
      ): ( 
         animeData && animeData.map((anime) => (  
          
          <div>
           <MovieCard key={anime.mal_id} image={anime.images.jpg.image_url} title={anime.title} /> 
            </div>
           
           )
          )) 
      

    }
    </div>
  )
}

export default Anime 