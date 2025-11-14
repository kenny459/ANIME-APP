import React, {useState, useEffect} from 'react' 
import MovieCard from './MovieCard'

const TopAnime = () => {
 const [topAnimeData, setTopAnimeData] = useState([])
 const [loading, setLoading] = useState(true)   
 const [error, setError] = useState('')
 

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
          setError('Error fetching data. Please try again') 
        console.error('Error fetching data:', error);
      } 
      finally{ 
        setLoading(false)
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
      ):error ? ( 
      <p className='text-red-500'>  
      {error}
      </p>): ( 
         topAnimeData && topAnimeData.map((topAnime) => (  
          
          <div>
           <MovieCard key={topAnime.mal_id}  image={manga.images.jpg.image_url} title={topAnime.title} /> 
            </div>
           
           )
          )) 
      

    }
    </div>
  )
}

export default TopAnime