import React, { useEffect, useRef, useState } from 'react';
import '../style/AnimationMiddleBox3.scss';
// Image Import
import IMG2 from '../assets/Mandir.png';

function AnimationMiddleBox3() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className='Image_container_animation'>
      <div className='Image_content_animation'>
        <div className='Image_placeholder2'></div>
        <div ref={imageRef} className={`Image2_animation ${isVisible ? 'show' : ''}`}>
          <img src={IMG2} alt="Interior Design" />
          <div className="hover-text1">Look our Similar Projects</div>
        </div>
        <div className='Image_placeholder'></div>
      </div>
    </div>
  );
}

export default AnimationMiddleBox3;
