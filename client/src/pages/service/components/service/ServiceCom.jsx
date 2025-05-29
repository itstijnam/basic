import React from 'react'

function ServiceCom() {

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
      <div className="service_design_details_sections servicepage_ourservice">

        {serviceCategories?.map((cat, i) => (
          <div className="display_section" key={i}>
            <h2>{cat?.heading}</h2>
            <p>{cat?.text}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default ServiceCom