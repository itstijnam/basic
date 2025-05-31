import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react'
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import "./ValuesCarousel.css";

const imageData = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

export default function ValuesCarousel() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - visibleCount : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex + visibleCount >= imageData.length ? 0 : prevIndex + 1
    );
  };

  const getVisibleImages = () => {
    const images = imageData.slice(index, index + visibleCount);
    if (images.length < visibleCount) {
      return [...images, ...imageData.slice(0, visibleCount - images.length)];
    }
    return images;
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls">
        <div className="carousel-track">
          {getVisibleImages().map((src, idx) => (
            <div className="pillar-image" key={idx}>
              <img src={src} alt={`Value ${idx}`} />
            </div>
          ))}
        </div>
        <div className="btns">
          <button onClick={prev} className="carousel-btn"><ArrowLeft /></button>
          <button onClick={next} className="carousel-btn"><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}
