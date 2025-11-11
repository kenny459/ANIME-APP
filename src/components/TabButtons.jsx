import React from 'react'

const TabButtons = ({activeTabIndex, setActiveTabIndex}) => { 
    const tabs = ['Anime', 'Manga' , 'Top Anime']  
     


  return (
    <div className='flex w-full text-white justify-around'
    > 
    { 
        tabs.map((tab, index) => ( 
            <a 
            key={index} 
            onClick={() => setActiveTabIndex(index)} 
            className = { 'cursor-pointer' + ( 
                activeTabIndex === index ? ' text-[#0296E5]' : ''
            )} > 
                {tab}
            </a>
        ))
    }
    </div>
  )
}

export default TabButtons