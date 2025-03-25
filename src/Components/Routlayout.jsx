import React from 'react'
import Hedar from '../Components/Hedar_/Hedar'
import Hedar_two from '../Components/Hedar_/Hedar_two'
import Nevbar from './Navbar_/Nevbar'
import Nevbar_main from './Navbar_/Nevbar_main'
import { Outlet } from 'react-router-dom'
import Footer from './Footer_/Footer'


const Routlayout = () => {
  return (
    <div>
        <Hedar />
        <Hedar_two />
        <Nevbar />
        <Nevbar_main />
        <Outlet />


        <Footer />
    </div>
  )
}

export default Routlayout
