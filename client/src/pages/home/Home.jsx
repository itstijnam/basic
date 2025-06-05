import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'
import HomeService from './components/HomeService'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBlackToggle } from '../../redux/customDesign'
import { useEffect } from 'react'
import AnimationBox from './components/AnimationBox'
import AnimationBox2 from './components/AnimationBox2'
import AnimationBox3 from './components/AnimationBox3'
import AnimationMiddleBox1 from './components/AnimationMiddleBox1'
import AnimationMiddleBox2 from './components/AnimationMiddleBox2'
import AnimationMiddleBox3 from './components/AnimationMiddleBox3'
import AnimationBox4 from './components/AnimationBox4'
import Schedule from './components/Schedule'
import Marquee from './components/Marquee'
import Testimonials from './components/Testimonials'
import GetAllTestimonials from '../../hooks/GetAllTestimonials'
import useGetAllServices from '../../hooks/GetAllServices'
import Animation from './animation/Animation'


function Home() {

  const { blackToggle } = useSelector(store => store.design);
  const dispatch = useDispatch();
  GetAllTestimonials()
  useGetAllServices()

// A black screen will appear for 2.5 seconds on the initial app load
// This effect only shows once — to see it again, clear localStorage or browser cache

// If you want the black screen to appear on *every* load and also block scrolling during it,
// use useEffect and toggle `setBlackToggle(false → true)` accordingly

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setBlackToggle(true));
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div
        style={
          // blackToggle ? 
          {
          backgroundImage: `url(${backImage})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          // minHeight: '100vh',
          // position: 'relative',
        } 
        // : { background: 'black' }
        }

        className={!blackToggle ? 'black_out' : 'home_items_display'}

        // onClick={() => dispatch(setBlackToggle(true))}
      >
        <div className='home_main_container'>
          <Hero />
        </div>
      </div>
      {blackToggle &&
        <>
          <div className="service_container_homes">
            <HomeService />
          </div>
          <div className="home_animation_box">
            <div style={{ borderBottom: '1px solid red', marginBottom: '2px' }}>
              <AnimationBox />
            </div>
            <div style={{ borderTop: '1px solid red', borderBottom: '1px solid red', marginTop: '4px' }}>
              <AnimationMiddleBox1 />
            </div>
            <div style={{ borderBottom: '1px solid red', borderTop: '1px solid red', marginBottom: '2px' }}>
              <AnimationBox2 />
            </div>
            <div style={{ borderTop: '1px solid red', borderBottom: '1px solid red', marginTop: '4px' }}>
              <AnimationMiddleBox2 />
            </div>
            <div style={{ borderTop: '1px solid red', borderBottom: '1px solid red', marginBottom: '2px' }}>
              <AnimationBox3 />
            </div>
            <div style={{ borderTop: '1px solid red', borderBottom: '1px solid red', marginTop: '4px' }}>
              <AnimationMiddleBox3 />
            </div>
            <div style={{ borderTop: '1px solid red', marginBottom: '2px' }}>
              <AnimationBox4 />
            </div>

          </div>

          {/* <div className="home_animation_box2">
            <Animation/>
          </div> */}

          <div className='Schedule_container'>
            <Schedule />
          </div>
          <div className='Murquee_container'>
            <Marquee />
          </div>
          <div className='Testimonial_container'>
            <Testimonials />
          </div>
        </>

      }
    </>
  )
}
export default Home;