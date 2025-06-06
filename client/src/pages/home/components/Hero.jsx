import React from 'react'
import '../style/Hero.scss'
import KITCHENIMAGE from '../assets/kitchen_home_page.jpg';
import FOOTERIMAGE from '../assets/footer_image.jpg'

function Hero() { 
  return (
    <div className='hero_container'>
      <div className="hero_top">
        <div className="HT_content">
          <div className="heading">
            {/* <h1 className='head_text'>Arch Space Interio</h1> */}
            <h1 className='head_animation head_text'>Arch Space Interio</h1>
            <p className='hero_content pop_up'>Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge
              modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication</p>
          </div>
          <div className="hero_image_section pop_up">
            <img src={KITCHENIMAGE} alt="" />
          </div>
        </div>
        <div className="hero_footer">
          {/* <div className="blank_box"></div> */}
          <div className="footer_right_box">
            <div className="_footer_image_section hall_animation">
              <img src={FOOTERIMAGE} alt="" />
            </div>
            <div className="design_box pop_up"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero