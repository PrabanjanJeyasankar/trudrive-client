import React from 'react'
import './TopNavBarComponent.css'
import { Search, CloudUpload } from 'lucide-react'


function TopNavBarComponent() {
  

  return (
    <div className='top-nav'>
      <div className='search-bar'>
        <Search
          size={20}
          className='search-icon'
        />
        <input
          type='text'
          placeholder='Search in TruDrive...'
        />
      </div>
      <div className='new-file'>
        <button>
          {' '}
          <CloudUpload />
          Upload new file
        </button>
      </div>
      
    </div>
  )
}

export default TopNavBarComponent
