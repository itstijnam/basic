import React from 'react'
import './style/Service.scss'
import BACKIMAGE from './components/assets/houseview.jpg'
import Caraousel from './components/caraousel/Caraousel'
import Subscription from './components/subscription/Subscription'
import Customers from './components/customers/Customers'
import ServiceCom from './components/service/ServiceCom'

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
    <div className="service_container" style={{ backgroundImage: `url(${BACKIMAGE})` }}>

      <div className='service_page_heading'>
        <h1>Our Serivices</h1>
      </div>

      <ServiceCom />

      <Caraousel />

      <Customers />

      <Subscription />

    </div>
  )
}

export default Service