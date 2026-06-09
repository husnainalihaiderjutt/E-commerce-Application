import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLeteerBox from '../components/NewsLeteerBox'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsLeteerBox></NewsLeteerBox>
      </div>
  )
}

export default Home