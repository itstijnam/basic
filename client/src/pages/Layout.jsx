import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import './Layout.scss'
import { useSelector } from 'react-redux'

function Layout() {
  const { blackToggle } = useSelector(store => store.design);
  return (
    <div className='layout'>
      <div className="layout_header">
        <Header />
      </div>
      <div className="layout_header_outlet"> 
        <Outlet />
      </div>
      {blackToggle &&
        <Footer />
      }
    </div>
  )
}

export default Layout