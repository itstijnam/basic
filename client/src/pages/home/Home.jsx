import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'
import HomeService from './components/HomeService'
import { useDispatch, useSelector } from 'react-redux'
import { setBlackToggle } from '../../redux/customDesign'
import { useEffect } from 'react'
import Schedule from './components/Schedule'
import Marquee from './components/Marquee'
import GetAllTestimonials from '../../hooks/GetAllTestimonials'
import useGetAllServices from '../../hooks/GetAllServices'
import Testimonials from '../../components/testimonials/Testimonials'
import Projects from './projects/Projects'
import Architecture_box from './components/Architecture_box'


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

      window.scrollTo(0, 0);

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
        <div className='home_main_container' style={{background: 'linear-gradient(rgba(0, 0, 0, 0.641))'}} >
          <Hero />
        </div>
      </div>
      {blackToggle &&
        <>
          <div className="service_container_homes">
            <HomeService />
          </div>

          <div className='Architecture'>
            <Architecture_box />
          </div>

          <div className="home_page_project_section">
            <Projects />
          </div>

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