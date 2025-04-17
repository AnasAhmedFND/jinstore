import React from 'react'
import Hero from '../Components/Home_/Hero'
import New_Arrivals from '../Components/Home_/New_Arrivals'
import Show_product from '../Components/Home_/Show_product'
import Servics from '../Components/Home_/Servics'
import Quality_product from '../Components/Home_/Quality_product'
import Featured from '../Components/Home_/Featured'

const Home = () => {
  return (
   <>
       <Hero />
       <Servics />
       <Show_product />
       <New_Arrivals />
       <Quality_product />
       <Featured />
   </>
  )
}

export default Home
