import React from 'react'
import './style/Service.scss'
import BACKIMAGE from './components/assets/houseview.jpg'

function Service() {

  const sampleImages = [
    {
      cardId: 0,
      heading: 'Oberoi House',
      img: '',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
    },
    {
      cardId: 1,
      heading: 'Taj Hotel',
      img: '',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
    },
    {
      cardId: 2,
      heading: 'Kashmir',
      img: '',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
    },
    {
      cardId: 3,
      heading: 'Gangtok',
      img: '',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
    },
    {
      cardId: 4,
      heading: 'Red Fort',
      img: '',
      shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
    },
  ]

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
    <div className="service_container">
      <div className='service_page_heading'>
        <h1>Our Serivices</h1>
      </div>

      <div className="service_design_details_sections">

        {serviceCategories?.map((cat, i) => (
          <div className="display_section" key={i}>
            <h2>{cat?.heading}</h2>
            <p>{cat?.text}</p>
          </div>
        ))}

      </div>

      

    </div>
  )
}

export default Service