import React from 'react' 
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='search '>   
    <Search className='absolute right-7 md:right-75' size={30} color='#67686D'/>  
    <input type="text" name="" id="" placeholder='Search'/>
        
    </div>
  )
}

export default SearchBar