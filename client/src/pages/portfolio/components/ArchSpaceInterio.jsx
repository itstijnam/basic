import React from 'react';
import './ArchSpaceInterio.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedService } from '../../../redux/serviceSlice';

const ArchSpaceInterio = () => {
  const { services } = useSelector(store => store.service);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="arch-space-interio">
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Arch Space Interio</h1>
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
              <div key={index} onClick={()=>{
                dispatch(setSelectedService(s))
                navigate(`/portfolio/view`)
              }} >
                <div className="hover-image-container">
                  <div>
                    <img
                      src={s?.image}
                      alt={s?.heading}
                      className="gallery-image"
                    />
                  </div>
                  <div className="overlay_text">{s?.heading}</div>
                </div>
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