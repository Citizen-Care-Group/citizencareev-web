import React from 'react'
import MainCarousal from '../Common/MainCarousal'
import ToggleEVSection2 from './ToggleEVSection2'
import UrbanMobilityPosters from './UrbanMobilityPosters'
// import UnmatchedSavingSection from './UnmatchedSavingSection'
// import OurStores from '../Common/OurStores'
// import News from './News'
import FAQ from '../Common/FAQ'

const Index = () => {
  return (
    <div className=' flex flex-col justify-center'>
      <MainCarousal />
      <ToggleEVSection2 />
      <UrbanMobilityPosters />
      {/* <UnmatchedSavingSection /> */}
      {/* <OurStores /> */}
      {/* <News /> */}
      <FAQ />
    </div>
  )
}

export default Index
