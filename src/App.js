import React from 'react'
import Header from './components/Header'
import Location from './components/Location'
import data from './data'

export default function App() {
  const locations = data.map(location=>{
    // do something with data
  })
  render (
    <Header />
    {locations}
  )
}
