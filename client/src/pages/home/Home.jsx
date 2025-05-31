import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'
import HomeService from './components/HomeService'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBlackToggle } from '../../redux/customDesign'
import { useEffect } from 'react'

function Home() {

  const {blackToggle} = useSelector(store => store.design);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setBlackToggle(false))
  },[])

  return (
    <>
      <div
        style={ blackToggle? {
          backgroundImage: `url(${backImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          position: 'relative',
        } : {background: 'black'}}

        // className={blackToggle ? 'black_out' : 'home_items_display'}
        
        onClick={() => dispatch(setBlackToggle(true))}
      >
        <div className='home_main_container'>
          <Hero />
        </div>
      </div>
      {blackToggle &&
        <div className="service_container_homes">
          <HomeService />
        </div>
      }
    </>
  )
}
export default Home;