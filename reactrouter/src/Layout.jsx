import React from 'react'
import Header from './componenets/header/header'
import Footer from './componenets/footer/footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout