import React from 'react'
import { Navbar, Footer  } from '@/components/website'
import { Outlet } from 'react-router-dom'

const DefaultLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default DefaultLayouts
