import React from 'react'
import './style/Service.scss'
import Subscription from './components/subscription/Subscription'
import Customers from './components/customers/Customers'
import ServiceCom from './components/service/ServiceCom'
import BGIMAGE from './components/assets/ourservice.webp'
import { useEffect } from 'react'

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{ background: 'white' }} >


        {/* i am using home page scss and its component for ease
        
          if you are trying to fix this css in future you should go as
          src >> pages >> home >> style (here u can read the code)
        */}

        {/* ------------------ top image heading -------------------  */}

        <div className="service_image">
          <div className="serv_image">
            <img src={BGIMAGE} alt="" />
          </div>
          <div className="serv_text">
            <h1 className='background_Arch_heading samehead'>Arch Space Interio</h1>
            <small className='sub_heading'> Desinged Heavens </small>
          </div>
        </div>



        {/* ------------------------ our section ---------------------------- */}

        <div className='service_main_container'>
          <div className='service_page_heading'>
            <h1>Our Services</h1>
          </div>

          <ServiceCom />

        </div>
      </div>




      <Customers />

      <Subscription />

    </>
  )
}

export default Service