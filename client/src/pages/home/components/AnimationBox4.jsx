import React, { useEffect, useRef, useState } from 'react';
import '../style/AnimationBox4.scss';

// Images
import IMG1 from '../assets/Landscape.png';
import IMG3 from '../assets/BATHROOM.jpg'; // Image 3 only

function AnimationBox4() {
  const image1Ref = useRef(null);
  const image3Ref = useRef(null);
  const [visible, setVisible] = useState({ img1: false, img3: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === image1Ref.current) {
              setVisible(v => ({ ...v, img1: true }));
            }
            if (entry.target === image3Ref.current) {
              setVisible(v => ({ ...v, img3: true }));
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (image1Ref.current) observer.observe(image1Ref.current);
    if (image3Ref.current) observer.observe(image3Ref.current);

    return () => {
      if (image1Ref.current) observer.unobserve(image1Ref.current);
      if (image3Ref.current) observer.unobserve(image3Ref.current);
    };
  }, []);

  return (
    <div className="Image_container_animation4">
      <div className="Image_content_animation4">
        <div ref={image1Ref} className={`Image1_animation4 ${visible.img1 ? 'show' : ''}`}>
          <img src={IMG1} alt="Residential" />
          <div className="hover-text4">Look our Similar Projects</div>
        </div>
        <div className="Image_spacer_animation4" />
        <div ref={image3Ref} className={`Image3_animation4 ${visible.img3 ? 'show' : ''}`}>
          <img src={IMG3} alt="Washroom" />
          <div className="hover-text4">Look our Similar Projects</div>
        </div>
      </div>
    </div>
  );
}

export default AnimationBox4;
