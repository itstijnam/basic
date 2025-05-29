import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        // overflow: 'hidden'
      }}
    >
      <div className='home_main_container'>
        <Hero />
      </div>
    </div>
  )
}

export default Home