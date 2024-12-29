import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'

const RootLayouts = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayouts
