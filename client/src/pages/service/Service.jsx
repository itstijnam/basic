import React from 'react'
import './style/Service.scss'
import BACKIMAGE from './components/assets/houseview.jpg'
import Caraousel from './components/caraousel/Caraousel'
import Subscription from './components/subscription/Subscription'
import Customers from './components/customers/Customers'
import ServiceCom from './components/service/ServiceCom'
import useGetAllServices from '../../hooks/GetAllServices'
import { useSelector } from 'react-redux'

function Service() {

  const serviceCategories = [
    {
      heading: 'Lighting Design',
      text: 'Achieve the perfect balance of ambient, task, and accent lighting for a functional atmoshphere'
    },
    {
      heading: 'Interior Design',
      text: 'From concept to completion, we oversee every detail to bring your vision to the life efficienctly'
    },
    {
      heading: 'Outdoor Design',
      text: 'Celebrate the changing seasons with our seasonal outdoor decor services'
    },
  ]



  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BACKIMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        

        {/* i am using home page scss and its component for ease
        
          if you are trying to fix this css in future you should go as
          src >> pages >> home >> style (here u can read the code)
        */}

        <div className='home_main_container'>
          <div className='service_page_heading'>
            <h1>Our Serivices</h1> 
          </div>
          
          <ServiceCom />

          <Caraousel />
        </div>
      </div>

      <Customers />

      <Subscription />

    </>
  )
}

export default Service