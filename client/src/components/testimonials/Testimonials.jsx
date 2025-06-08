import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useSelector } from 'react-redux'
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";


const Testimonials = () => {
  const { testimonials } = useSelector(store => store.service)

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="testimonial-wrapper">
      <h1 className="section-heading">Testimonials</h1>
      <div className="swiper-wrapper-custom">
        {/* Custom arrows rendered before Swiper */}
        <div ref={prevRef} className="swiper-button-prev custom-nav"></div>
        <div ref={nextRef} className="swiper-button-next custom-nav"></div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={30}
          slidesPerView={2.5}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
          }}
        >
          {testimonials?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <img src={item?.image} alt="client" />
                </div>
                <div className="testimonial-content">
                  <h2>{item?.testimonial_name}</h2>
                  <p>{item?.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
