import React from 'react'
import MainCarousal from './MainCarousal'
import ToggleEVSection2 from './ToggleEVSection2'
import UrbanMobilityPosters from './UrbanMobilityPosters'
import UnmatchedSavingSection from './UnmatchedSavingSection'

const Index = () => {
  return (
    <div className=' flex flex-col justify-center'>
      <MainCarousal />
      <ToggleEVSection2 />
      <UrbanMobilityPosters />
      <UnmatchedSavingSection/>
    </div>
  )
}

export default Index
