import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import './Layout.scss'

function Layout() {
  return (
    <div className='layout'>
        <div className="layout_header">
            <Header/>
        </div>
        <div className="layout_header">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout