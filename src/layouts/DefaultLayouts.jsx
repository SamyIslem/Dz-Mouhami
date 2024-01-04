import React from 'react'
import { Navbar } from '@/components/website'
import { Outlet } from 'react-router-dom'

const DefaultLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}

export default DefaultLayouts
