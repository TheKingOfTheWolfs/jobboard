import React from 'react'
import Introduction from './Introduction'
import Search from './Search'

function MainPage() {
  return (
     <>
    <div className='main-container'>
      <div className='search-box'> find your perfect job
      <Search/>
      </div>
      </div>
      <Introduction/>
      </>
    
  )
}

export default MainPage