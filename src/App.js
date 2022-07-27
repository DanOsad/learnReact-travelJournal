import React from 'react'
import Header from './components/Header'
import Location from './components/Location'
import data from './data'

export default function App() {
  const locations = data.map(location=>{
    return (
      <Location 
        key={location.id}
        {...location}
      />
    )
  })
  return (
    <div className='container'>
      <Header />
      <div className='locations-container'>
        {locations}
      </div>
    </div>
  )
}
