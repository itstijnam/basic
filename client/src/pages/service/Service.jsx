import React from 'react'
import './style/Service.scss'
import BACKIMAGE from './components/assets/houseview.jpg'
import Caraousel from './components/caraousel/Caraousel'
import Subscription from './components/subscription/Subscription'
import Customers from './components/customers/Customers'
import ServiceCom from './components/service/ServiceCom'
import useGetAllServices from '../../hooks/GetAllServices'
import { useSelector } from 'react-redux'
import BGIMAGE from './components/assets/ourservice.webp'
import { useEffect } from 'react'

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          // backgroundImage: `url(${BACKIMAGE})`,
          background: 'white',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          // minHeight: '100vh',
          // position: 'relative',
        }}
      >


        {/* i am using home page scss and its component for ease
        
          if you are trying to fix this css in future you should go as
          src >> pages >> home >> style (here u can read the code)
        */}

        <div className="service_image">
          <img src={BGIMAGE} alt="" />
        </div>
        <h1 className='background_Arch_heading samehead'>Arch Space Interio</h1>
        <small className='sub_heading'> Desinged Heavens </small>
        {/* <h1 className='background_image_heading samehead'>Our Services</h1>  */}
        <div className='service_main_container'>
          <div className='service_page_heading'>
            <h1>Our Services</h1>
          </div>

          <ServiceCom />

          {/* <Caraousel /> */}
        </div>
      </div>




      <Customers />

      <Subscription />

    </>
  )
}

export default Service