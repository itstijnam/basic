import React from 'react'
import '../../style/Caraousel.scss'
import Interior from '../assets/interior.jpeg';
import Outdoor from '../assets/houseview.jpg';
import LightHouse from '../assets/lighthouse.jpeg';
import backImage from '../assets/houseview.jpg';
import HouseImage from '../assets/house.jpg'

function Caraousel() {

      const sampleImages = [
        {
          cardId: 0,
          heading: 'Oberoi House',
          img: Interior,
          shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
        },
        {
          cardId: 1,
          heading: 'Taj Hotel',
          img: Outdoor,
          shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
        },
        {
          cardId: 2,
          heading: 'Kashmir',
          img: LightHouse,
          shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
        },
        {
          cardId: 3,
          heading: 'Gangtok',
          img: backImage,
          shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
        },
        {
          cardId: 4,
          heading: 'Red Fort',
          img: HouseImage,
          shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe provident natus voluptas repellendus, excepturi nobis quae, voluptatibus, nesciunt atque molestias rem? Voluptates obcaecati explicabo corporis rerum dolores totam nobis aut enim ipsam ut.'
        },
      ]

  return (
    <div className='caraousel'  >
        <div className="caraouselbox1 CB13">
            <div className="for_Box1_CB2_heading">
                <h2>Heading 2</h2>
            </div>
            <div className="box1_image">
                <img src={sampleImages[sampleImages.length-1].img} alt="" />
            </div>
        </div>
        <div className="caraouselbox2">
            <div className="box2_image">
                <img src={sampleImages[0].img} alt="" />
            </div>
            <div className="caraousel_action">
                <button>←</button>
                <span>01</span>
                <button>→</button>
            </div>
        </div>
        <div className="caraouselbox3 CB13">+
            <div className="box3_image"> 
                <img src={sampleImages[1].img} alt="" />
            </div>
            <div className="for_box2_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque consequatur consectetur! </p>
            </div>
        </div>
    </div>
  )
}

export default Caraousel