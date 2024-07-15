import React from 'react'
import MainCarousal from './MainCarousal'
import ToggleEVSection2 from './ToggleEVSection2'
import UrbanMobilityPosters from './UrbanMobilityPosters'

const Index = () => {
  return (
    <div className=' flex flex-col justify-center'>
      <MainCarousal />
      <ToggleEVSection2 />
      <UrbanMobilityPosters/>
    </div>
  )
}

export default Index
