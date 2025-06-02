import React from 'react';
import './ArchSpaceInterio.scss';
import { useSelector } from 'react-redux';

const ArchSpaceInterio = () => {
  const { services } = useSelector(store => store.service);

  return (
    <div className="arch-space-interio">
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>ARCH SPACE INTERIO</h1>
            <p className="hero-subtitle">Where Ideas Become Reality</p>
            <p className="hero-description">
              Transform your space into a masterpiece with our innovative interior design solutions.
              We create luxurious, functional environments that reflect your unique style and vision.
            </p>
            {/* <div className="placeholder-boxes">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="box"></div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="container">
          <div className="image-gallery">
            {services?.map((s, index) => (
              <div className="hover-image-container" key={index}>
                <img
                  src={s?.image}
                  alt={s?.heading}
                  className="gallery-image"
                />

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional sections for completeness */}
    </div>
  );
};

export default ArchSpaceInterio;