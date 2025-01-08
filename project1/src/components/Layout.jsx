import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Navbar/>
      {/* Changed Component depending on route */}
      <Outlet/>
      <Footer/>
    </>
  )
}

// Outlet Component is related to the children that is existed in the create browser of the layout in the App component.
