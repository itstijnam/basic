import React from 'react'
import { useNavigate } from 'react-router-dom'

function ServiceCom() {

  const navigate = useNavigate();

  const serviceCategories = [
    {
      heading: 'Lighting Design',
      text: 'Illuminate your spaces with expertly crafted lighting solutions that enhance ambiance, functionality, and energy efficiency for every room in your home.'
    },
    {
      heading: 'Interior Design',
      text: 'Transform your living spaces with bespoke interior designs that reflect your personality while optimizing comfort, flow, and aesthetic appeal.'
    },
    {
      heading: 'Outdoor Design',
      text: 'Create stunning outdoor living areas with landscape designs that harmonize with nature and extend your home\'s living space to the great outdoors.'
    },
    {
      heading: 'Office Design',
      text: 'Boost productivity and professionalism with ergonomic office designs tailored to your business needs and corporate identity.'
    },
  ]

  return (
    <>
      <div className="service_design_details_sections servicepage_ourservice">

        {serviceCategories?.map((cat, i) => (
          <div className="display_section" key={i} onClick={()=>navigate(`/service/${cat.heading}`)} >
            <h2>{cat?.heading}</h2>
            <p>{cat?.text}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default ServiceCom