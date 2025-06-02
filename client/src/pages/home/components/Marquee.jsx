import React from 'react';
import '../style/Marquee.scss';
import Marquee from 'react-fast-marquee';

import IMG1 from '../assets/MarqueePng/google.png';
import IMG2 from '../assets/MarqueePng/LinkedIn.png';
import IMG3 from '../assets/MarqueePng/MetelLB.png';
import IMG4 from '../assets/MarqueePng/Microsoft.png';
import IMG5 from '../assets/MarqueePng/Instagram.png';

function MarqueeSection() {
  return (
    <div className='marquee_container'>
      <div className='marquee_content'>
        <h1>Featured Clients</h1>
      </div>

      <div>
        <Marquee speed={80}>
          <div className='marquee_track'>
            <img src={IMG1} alt="Google" />
            <img src={IMG2} alt="LinkedIn" className="Fixed-size"/>
            <img src={IMG3} alt="MetelLB" />
            <img src={IMG4} alt="Microsoft" />
            <img src={IMG5} alt="Instagram" className="Fixed-size"/>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
