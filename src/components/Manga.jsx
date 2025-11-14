import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
const Manga = () => {
 const [mangaData, setMangaData] = useState([])
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState('')
   
 
    async function  fetchManga(){  
      try { 
        const response = await fetch('https://api.jikan.moe/v4/top/manga'); 
        if (!response.ok){ 
          throw new Error ('HTTP error! status: ${response.status}');
        } 
        const data = await response.json(); 
        
         
               
            if (data && data.data) { 
              setMangaData(data.data);  
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
    fetchManga();
  }, []);
  return (  
    <div className=' mt-10 ml-5 grid grid-cols-3 gap-5'>
    {  
      loading ? ( 
        <p className = 'text-white'>Loading...</p>
      ): error ? ( 
      <p className='text-red-500'>  
      {error}
      </p>):  ( 
         mangaData && mangaData.map((manga) => (  
          
          <div>
           <MovieCard key={manga.mal_id} image={manga.images.jpg.image_url} title={manga.title} /> 
            </div>
           
           )
          )) 
      

    }
    </div>
  )
}

export default Manga