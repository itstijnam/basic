import React from 'react';
import '../style/Marquee.scss';
import Marquee from 'react-fast-marquee';

import IMG1 from '../assets/MarqueePng/Budhvihar.png';
import IMG2 from '../assets/MarqueePng/Delhi House.png';
import IMG3 from '../assets/MarqueePng/Dosood Mandir.png';
import IMG4 from '../assets/MarqueePng/Mahima Florenza.png';
import IMG5 from '../assets/MarqueePng/Royal Court.png';
import IMG6 from '../assets/MarqueePng/Shakti Resort.png';
import IMG7 from '../assets/MarqueePng/Yuva Shakti School.png';

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
            <img src={IMG2} alt="LinkedIn" />
            <img src={IMG3} alt="MetelLB" />
            <img src={IMG4} alt="Microsoft" />
            <img src={IMG5} alt="Instagram" />
            <img src={IMG6} alt="Instagram" />
            <img src={IMG7} alt="Instagram" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
