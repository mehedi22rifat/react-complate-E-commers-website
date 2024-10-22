import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto'>

    <Navbar/>
     <Outlet/>
     <Footer/>
  

    </div>
  )
}

export default Main