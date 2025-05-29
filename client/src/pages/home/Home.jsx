import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'
import HomeService from './components/HomeService'

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div className='home_main_container'>
          <Hero />
        </div>
      </div>
      <div className="service_container_homes">
        <HomeService/>
      </div>
    </>
  )
}
export default Home;